export const solution_grover = `
from qiskit import QuantumCircuit, transpile
from qiskit_aer import QasmSimulator

# Función para crear el oráculo para el estado "11"
def oracle(circuit, qubits):
    # Oráculo para el estado "11", utilizando una puerta Z y X
    circuit.cz(qubits[0], qubits[1])  # Puerta Z controlada para marcar el estado "11"

# Función para aplicar el algoritmo de Grover
def grover_algorithm(circuit, qubits):
    # Inicializar el estado en |+> (superposición) utilizando puertas Hadamard
    circuit.h(qubits)
    
    # Aplicar el oráculo
    oracle(circuit, qubits)
    
    # Aplicar la difusión (inversión sobre la media)
    circuit.h(qubits)
    circuit.x(qubits)
    circuit.cz(qubits[0], qubits[1])  # Puerta Z controlada
    circuit.x(qubits)
    circuit.h(qubits)

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled).result()
    return result

# Crear el circuito cuántico de 2 qubits
qubits = [0, 1]
circuit = QuantumCircuit(2, 2)

# Aplicar el algoritmo de Grover
grover_algorithm(circuit, qubits)
# Medir los qubits
circuit.measure(qubits, [0, 1])
# Simulador cuántico
result = run_circuit(circuit)
# Resultados
counts = result.get_counts()

# Visualizar la solución esperada
print("Resultado esperado: 11")
# Visualizar el circuito
print(circuit.draw())
# Visualizar el resultado 
print("Resultado de la medición:", counts)
`

export const results_11_grover = `
Solución esperada: 11
     ┌───┐   ┌───┐┌───┐   ┌───┐┌───┐┌─┐   
q_0: ┤ H ├─■─┤ H ├┤ X ├─■─┤ X ├┤ H ├┤M├───
     ├───┤ │ ├───┤├───┤ │ ├───┤├───┤└╥┘┌─┐
q_1: ┤ H ├─■─┤ H ├┤ X ├─■─┤ X ├┤ H ├─╫─┤M├
     └───┘   └───┘└───┘   └───┘└───┘ ║ └╥┘
c: 2/════════════════════════════════╩══╩═
                                     0  1 
Resultado de la medición: {'11': 1024}
`

export const grover_example = `https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22~i4eo%22%5D%2C%5B%22H%22%2C%22H%22%5D%2C%5B%22X%22%2C%22X%22%5D%2C%5B1%2C%22H%22%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C%22H%22%5D%2C%5B%22X%22%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~i4eo%22%2C%22name%22%3A%22oracle%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22X%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C0%2C1%5D%7D`
