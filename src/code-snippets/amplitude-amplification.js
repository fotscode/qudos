export const quirk_example =`https://algassert.com/quirk#circuit={%22cols%22:[[%22H%22,%22H%22,%22H%22,%22H%22],[%22~d6i4%22],[%22~u6pt%22],[%22~d6i4%22],[%22~u6pt%22],[%22Amps4%22]],%22gates%22:[{%22id%22:%22~u6pt%22,%22name%22:%22mirror%22,%22circuit%22:{%22cols%22:[[%22H%22,%22H%22,%22H%22,%22H%22],[%22X%22,%22X%22,%22X%22,%22X%22],[%22%E2%80%A2%22,%22%E2%80%A2%22,%22%E2%80%A2%22,%22Z%22],[%22X%22,%22X%22,%22X%22,%22X%22],[%22H%22,%22H%22,%22H%22,%22H%22]]}},{%22id%22:%22~d6i4%22,%22name%22:%22flip_x1/x2%22,%22circuit%22:{%22cols%22:[[1,1,%22X%22,%22X%22],[%22%E2%80%A2%22,1,%22%E2%80%A2%22,%22Z%22],[1,1,%22X%22,%22X%22]]}}]}`

export const qiskit_example =`
from qiskit import QuantumCircuit, circuit, transpile
from qiskit_aer import QasmSimulator 

QUBIT_COUNT = 4
QUBITS = range(QUBIT_COUNT) 
ITERATIONS = 2
NUMBERS_TO_FIND = [1, 3] 
A = circuit.library.HGate() 

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled_qc = transpile(qc) 
    result = sim.run(transpiled_qc).result()
    return result

def flip(qc: QuantumCircuit, nums_to_find: list[int]):
    """
    Aplica la operación de selección sobre los números recibidos en 'nums_to_find'.
    Para cada número en 'nums_to_find', esta función voltea su fase.
    Un número N se representa como un estado computacional |N⟩.
    """
    for num in nums_to_find:
        # Determine the qubits that need an X gate to transform |num⟩ to |1...1⟩.
        # These are the qubits that are '0' in the binary representation of num.
        # Qiskit's convention: q0 is LSB.
        # Example: num=1 (0001 for 4 qubits), X applied to q1, q2, q3.
        # Example: num=3 (0011 for 4 qubits), X applied to q2, q3.
        
        qubits_to_apply_x = []
        for i in range(QUBIT_COUNT):
            # Check if the i-th bit of num (from LSB) is 0
            if not (num & (1 << i)):
                qubits_to_apply_x.append(i)
        
        # Apply X gates to transform |num⟩ to |1...1⟩
        if qubits_to_apply_x: 
            qc.x(qubits_to_apply_x)
        
        # Apply multi-controlled Z gate (MCZ) to flip the phase of |1...1⟩.
        # ZGate().control(N-1) applied to N qubits acts as an MCZ gate
        # that flips the phase of the state |1⟩^{\otimes N}.
        if QUBIT_COUNT > 0: 
            mcz_gate = circuit.library.ZGate().control(QUBIT_COUNT - 1)
            qc.append(mcz_gate, QUBITS)
            
        # Apply X gates again to transform back from |1...1⟩ to |num⟩
        if qubits_to_apply_x:
            qc.x(qubits_to_apply_x)
            
    return qc

def mirror(qc: QuantumCircuit):
    """
    Aplica el operador espejo al circuito cuántico
    También llamado operador de difusión de Grover
    Utilizando el algoritmo de superposición A 
    """
    for qubit_idx in QUBITS: 
        qc.append(A, [qubit_idx]) 

    qc.x(QUBITS)

    if QUBIT_COUNT > 0:
        mcz_gate = circuit.library.ZGate().control(QUBIT_COUNT - 1)
        qc.append(mcz_gate, QUBITS)

    qc.x(QUBITS)

    for qubit_idx in QUBITS:
        qc.append(A, [qubit_idx])
        
    return qc

def analyze_aa_results(results):
    counts = results.get_counts()
    print("Resultados (counts):", counts)
    
    # Calculate total shots for percentages
    total_shots = sum(counts.values())
    if total_shots == 0:
        print("Porcentajes: No shots found.")
        return

    # Calculate percentages
    # Qiskit measurement string is MSB first, e.g., '0001' for 4 qubits.
    # This corresponds to decimal 1.
    percentages = {}
    for bitstring, count in counts.items():
        decimal_value = int(bitstring, 2)
        percentages[decimal_value] = (count / total_shots) * 100
        
    ordered_percentages = dict(sorted(percentages.items(), key=lambda item: item[1], reverse=True))
    
    print("Porcentajes (ordenados):")
    for val, perc in ordered_percentages.items():
        binary_representation = format(val, f'0{QUBIT_COUNT}b')
        print(f"  Estado |{binary_representation}⟩ (Decimal {val}): {perc:.2f}%")


# Create Quantum Circuit
qc = QuantumCircuit(QUBIT_COUNT, QUBIT_COUNT) 

# 1. Initialize state to uniform superposition: H^{\otimes n} |0...0⟩
for qubit_idx in QUBITS:
    qc.append(A, [qubit_idx]) 

# 2. Iterations
for iteration in range(ITERATIONS):
    qc.barrier()
    # Apply phase flip for solutions
    qc = flip(qc, NUMBERS_TO_FIND)
    qc.barrier()
    # Apply Diffusion operator (mirror)
    qc = mirror(qc)
    qc.barrier()

# 3. Measurement
qc.measure(QUBITS, QUBITS) 

# Print the circuit
print("Diagrama del circuito cuántico:")
print(qc.draw(output='text')) 

# Run the circuit and analyze results
print("\nEjecutando el circuito...")
results = run_circuit(qc)
analyze_aa_results(results)
`

export const qiskit_example_result =`
Diagrama del circuito cuántico:
     ┌───┐ ░                            ░ ┌───┐┌───┐   ┌───┐┌───┐ ░  ░                            ░ ┌───┐┌───┐   ┌───┐┌───┐ ░ ┌─┐         
q_0: ┤ H ├─░───────■────────────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──░───────■────────────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░─┤M├─────────
     ├───┤ ░ ┌───┐ │ ┌───┐      │       ░ ├───┤├───┤ │ ├───┤├───┤ ░  ░ ┌───┐ │ ┌───┐      │       ░ ├───┤├───┤ │ ├───┤├───┤ ░ └╥┘┌─┐      
q_1: ┤ H ├─░─┤ X ├─■─┤ X ├──────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──░─┤ X ├─■─┤ X ├──────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──╫─┤M├──────
     ├───┤ ░ ├───┤ │ ├───┤┌───┐ │ ┌───┐ ░ ├───┤├───┤ │ ├───┤├───┤ ░  ░ ├───┤ │ ├───┤┌───┐ │ ┌───┐ ░ ├───┤├───┤ │ ├───┤├───┤ ░  ║ └╥┘┌─┐   
q_2: ┤ H ├─░─┤ X ├─■─┤ X ├┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──░─┤ X ├─■─┤ X ├┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──╫──╫─┤M├───
     ├───┤ ░ ├───┤ │ ├───┤├───┤ │ ├───┤ ░ ├───┤├───┤ │ ├───┤├───┤ ░  ░ ├───┤ │ ├───┤├───┤ │ ├───┤ ░ ├───┤├───┤ │ ├───┤├───┤ ░  ║  ║ └╥┘┌─┐
q_3: ┤ H ├─░─┤ X ├─■─┤ X ├┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──░─┤ X ├─■─┤ X ├┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░──╫──╫──╫─┤M├
     └───┘ ░ └───┘   └───┘└───┘   └───┘ ░ └───┘└───┘   └───┘└───┘ ░  ░ └───┘   └───┘└───┘   └───┘ ░ └───┘└───┘   └───┘└───┘ ░  ║  ║  ║ └╥┘
c: 4/══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╩══╩══╩══╩═
                                                                                                                               0  1  2  3 

Ejecutando el circuito...
Resultados (counts): {'1110': 1, '0000': 2, '0001': 492, '1111': 5, '0011': 483, '0111': 1, '1011': 2, '1100': 4, '0010': 5, '0100': 3, '1001': 4, '0101': 6, '1000': 6, '0110': 3, '1101': 3, '1010': 4}
Porcentajes (ordenados):
  Estado |0001⟩ (Decimal 1): 48.05%
  Estado |0011⟩ (Decimal 3): 47.17%
  Estado |0101⟩ (Decimal 5): 0.59%
  Estado |1000⟩ (Decimal 8): 0.59%
  Estado |1111⟩ (Decimal 15): 0.49%
  Estado |0010⟩ (Decimal 2): 0.49%
  Estado |1100⟩ (Decimal 12): 0.39%
  Estado |1001⟩ (Decimal 9): 0.39%
  Estado |1010⟩ (Decimal 10): 0.39%
  Estado |0100⟩ (Decimal 4): 0.29%
  Estado |0110⟩ (Decimal 6): 0.29%
  Estado |1101⟩ (Decimal 13): 0.29%
  Estado |0000⟩ (Decimal 0): 0.20%
  Estado |1011⟩ (Decimal 11): 0.20%
  Estado |1110⟩ (Decimal 14): 0.10%
  Estado |0111⟩ (Decimal 7): 0.10%
`
