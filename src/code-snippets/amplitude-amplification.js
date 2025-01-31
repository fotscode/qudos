export const flip_3_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22~iaop%22%5D%2C%5B%22~u6pt%22%5D%2C%5B%22~iaop%22%5D%2C%5B%22~u6pt%22%5D%2C%5B%22~iaop%22%5D%2C%5B%22~u6pt%22%5D%2C%5B%22Amps4%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~iaop%22%2C%22name%22%3A%22flip_3%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B1%2C1%2C%22X%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22Z%22%5D%2C%5B1%2C1%2C%22X%22%2C%22X%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~u6pt%22%2C%22name%22%3A%22mirror%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22X%22%2C%22X%22%2C%22X%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22Z%22%5D%2C%5B%22X%22%2C%22X%22%2C%22X%22%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%5D%7D%7D%5D%7D`

export const qiskit_flip_3_example=`
from qiskit import QuantumCircuit, circuit, transpile
from qiskit_aer import QasmSimulator

QUBIT_COUNT = 4
QUBITS = range(QUBIT_COUNT)
ITERATIONS = 3
NUMBER_TO_FIND = 3

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled).result()
    return result

def flip(qc, num):
    """
    Aplica la operación de dar vuelta un numero al circuito cuántico
    Selecciona \`num\` como el elemento marcado
    """
    x_bits = ~num
    x_list = [x for x in range(QUBIT_COUNT) if x_bits & (1 << x)]
    qc.x(x_list)
    cz_gate = circuit.library.ZGate().control(QUBIT_COUNT-1)
    qc.append(cz_gate, QUBITS)
    qc.x(x_list)

    return qc

def mirror(qc):
    """
    Aplica el operador espejo al circuito cuántico
    También llamado operador de difusión de Grover
    """
    qc.h(QUBITS)
    qc.x(QUBITS)
    cz_gate = circuit.library.ZGate().control(QUBIT_COUNT-1)
    qc.append(cz_gate, QUBITS)
    qc.x(QUBITS)
    qc.h(QUBITS)
    return qc

def analyze_aa_results(results):
    counts = results.get_counts()
    print("Resultados:", counts)
    total = sum(counts.values())
    percentages = {key: f"{value / total*100:.2f}%" for key, value in counts.items()}
    ordered_percentages = dict(sorted(percentages.items(), key=lambda item: item[1], reverse=True))
    print("Porcentajes:", ordered_percentages)

qc = QuantumCircuit(QUBIT_COUNT, QUBIT_COUNT)
qc.h(QUBITS)

for _ in range(ITERATIONS):
    qc.barrier()
    qc = flip(qc, NUMBER_TO_FIND)
    qc.barrier()
    qc = mirror(qc)

qc.measure(QUBITS, QUBITS)
print(qc.draw())

res = run_circuit(qc)
analyze_aa_results(res)
`
export const qiskit_flip_3_example_result=`
     ┌───┐ ░               ░ ┌───┐┌───┐   ┌───┐┌───┐ ░               ░ ┌───┐┌───┐   ┌───┐┌───┐ ░               ░ ┌───┐┌───┐   ┌───┐┌───┐┌─┐         
q_0: ┤ H ├─░───────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░───────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░───────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├┤M├─────────
     ├───┤ ░       │       ░ ├───┤├───┤ │ ├───┤├───┤ ░       │       ░ ├───┤├───┤ │ ├───┤├───┤ ░       │       ░ ├───┤├───┤ │ ├───┤├───┤└╥┘┌─┐      
q_1: ┤ H ├─░───────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░───────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░───────■───────░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─╫─┤M├──────
     ├───┤ ░ ┌───┐ │ ┌───┐ ░ ├───┤├───┤ │ ├───┤├───┤ ░ ┌───┐ │ ┌───┐ ░ ├───┤├───┤ │ ├───┤├───┤ ░ ┌───┐ │ ┌───┐ ░ ├───┤├───┤ │ ├───┤├───┤ ║ └╥┘┌─┐   
q_2: ┤ H ├─░─┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░─┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░─┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─╫──╫─┤M├───
     ├───┤ ░ ├───┤ │ ├───┤ ░ ├───┤├───┤ │ ├───┤├───┤ ░ ├───┤ │ ├───┤ ░ ├───┤├───┤ │ ├───┤├───┤ ░ ├───┤ │ ├───┤ ░ ├───┤├───┤ │ ├───┤├───┤ ║  ║ └╥┘┌─┐
q_3: ┤ H ├─░─┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░─┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─░─┤ X ├─■─┤ X ├─░─┤ H ├┤ X ├─■─┤ X ├┤ H ├─╫──╫──╫─┤M├
     └───┘ ░ └───┘   └───┘ ░ └───┘└───┘   └───┘└───┘ ░ └───┘   └───┘ ░ └───┘└───┘   └───┘└───┘ ░ └───┘   └───┘ ░ └───┘└───┘   └───┘└───┘ ║  ║  ║ └╥┘
c: 4/════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╩══╩══╩══╩═
                                                                                                                                         0  1  2  3 
Resultados: {'1111': 1, '1101': 2, '0100': 1, '0000': 2, '0010': 2, '1001': 4, '1100': 2, '0101': 3, '1110': 3, '1010': 3, '0111': 4, '0011': 997}
Porcentajes: {'0011': '97.36%', '1001': '0.39%', '0111': '0.39%', '0101': '0.29%', '1110': '0.29%', '1010': '0.29%', '1101': '0.20%', '0000': '0.20%', '0010': '0.20%', '1100': '0.20%', '1111': '0.10%', '0100': '0.10%'}
`
