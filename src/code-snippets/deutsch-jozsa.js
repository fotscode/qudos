export const common_deutsch_lib=`
from qiskit import QuantumCircuit
from qiskit_aer import QasmSimulator
from qiskit import transpile

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled).result()
    return result

def circuit_deutsch_jozsa(function: QuantumCircuit):
    """
    Compila un circuito para usarlo en el algoritmo de Deutsch-Jozsa.
    """
    n = function.num_qubits - 1
    qc = QuantumCircuit(n + 1, n)
    qc.x(n)
    qc.h(range(n + 1))
    qc.compose(function, inplace=True)
    qc.h(range(n))
    qc.measure(range(n), range(n))
    return qc
`

export const deutsch_none_url = `https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%5D%2C%5B%22H%22%5D%2C%5B%22Measure%22%5D%5D%7D`
export const deutsch_cx_url = `https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22H%22%5D%2C%5B%22Measure%22%5D%5D%7D`
export const deutsch_init_code = `
regs = [QuantumRegister(2, "q"), ClassicalRegister(1, "c")]
qc = QuantumCircuit(*regs)
qc.h(0)
qc.x(1)
qc.h(1)
qc.barrier()
`
export const deutsch_end_code = `
qc.barrier()
qc.h(0)
qc.measure(0, 0)
`

export const deutsch_none_qiskit = `${deutsch_init_code}# no hace nada${deutsch_end_code}`
export const deutsch_cx_qiskit = `${deutsch_init_code}qc.cx(0, 1)${deutsch_end_code}`

export const deutsch_jozsa_constant_url=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22Measure%22%2C%22Measure%22%2C%22Measure%22%2C%22Measure%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~abgn%22%2C%22name%22%3A%221010string%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22%E2%80%A2%22%2C1%2C1%2C1%2C%22X%22%5D%2C%5B1%2C1%2C%22%E2%80%A2%22%2C1%2C%22X%22%5D%5D%7D%7D%5D%7D`
export const deutsch_jozsa_balanced_url=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22%E2%80%A2%22%2C1%2C1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22Measure%22%2C%22Measure%22%2C%22Measure%22%2C%22Measure%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~abgn%22%2C%22name%22%3A%221010string%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22%E2%80%A2%22%2C1%2C1%2C1%2C%22X%22%5D%2C%5B1%2C1%2C%22%E2%80%A2%22%2C1%2C%22X%22%5D%5D%7D%7D%5D%7D`

export const deutsch_jozsa_code=`
${common_deutsch_lib}
def dj_function(num_inputs):
    """
    Crea una función de Deutsch-Jozsa aleatoria (balanceada/constante).
    - num_qubits: el número de entradas de la función
    """

    qc = QuantumCircuit(num_inputs + 1)
    qc.barrier()
    if np.random.rand() > 0.5:
        qc.x(num_inputs)
    else:
        qc.cx(0, num_inputs)
    qc.barrier()
    return qc


def analyze_dj_results(results):
    """
    Analiza los resultados de una ejecución de Deutsch-Jozsa.
    Determina si la función es constante o balanceada segun los resultados.
    """
    counts = results.get_counts()
    # obtiene la medición del primer qubit (el de arriba)
    key = list(counts.keys())[0]
    if key[-1] == "0":
        return key + ": constante"
    else:
        return key + ": balanceada"


num_inputs = 3
if len(sys.argv) >= 2:
    num_inputs = int(sys.argv[1]) # permite cambiar la cantidad de entradas
oracle = dj_function(num_inputs) # crea una función constante/balanceada
print("Oráculo:")
print(oracle.draw())
print("Circuito Deutsch-Jozsa:")
dj_circuit = circuit_deutsch_jozsa(oracle) # codifica el oráculo en el circuito
print(dj_circuit.draw())
print("Corriendo el circuito de Deutsch-Jozsa:")
print(analyze_dj_results(run_circuit(dj_circuit)))
`

export const deutsch_jozsa_result_balanced=`
Oráculo:
      ░       ░ 
q_0: ─░───■───░─
      ░   │   ░ 
q_1: ─░───┼───░─
      ░   │   ░ 
q_2: ─░───┼───░─
      ░ ┌─┴─┐ ░ 
q_3: ─░─┤ X ├─░─
      ░ └───┘ ░ 
Circuito Deutsch-Jozsa:
     ┌───┐      ░       ░ ┌───┐┌─┐      
q_0: ┤ H ├──────░───■───░─┤ H ├┤M├──────
     ├───┤      ░   │   ░ ├───┤└╥┘┌─┐   
q_1: ┤ H ├──────░───┼───░─┤ H ├─╫─┤M├───
     ├───┤      ░   │   ░ ├───┤ ║ └╥┘┌─┐
q_2: ┤ H ├──────░───┼───░─┤ H ├─╫──╫─┤M├
     ├───┤┌───┐ ░ ┌─┴─┐ ░ └───┘ ║  ║ └╥┘
q_3: ┤ X ├┤ H ├─░─┤ X ├─░───────╫──╫──╫─
     └───┘└───┘ ░ └───┘ ░       ║  ║  ║ 
c: 3/═══════════════════════════╩══╩══╩═
                                0  1  2 
Corriendo el circuito de Deutsch-Jozsa:
001: balanceada
`

export const deutsch_jozsa_result_constant=`
Oráculo:
      ░       ░ 
q_0: ─░───────░─
      ░       ░ 
q_1: ─░───────░─
      ░       ░ 
q_2: ─░───────░─
      ░ ┌───┐ ░ 
q_3: ─░─┤ X ├─░─
      ░ └───┘ ░ 
Circuito Deutsch-Jozsa:
     ┌───┐      ░       ░ ┌───┐┌─┐      
q_0: ┤ H ├──────░───────░─┤ H ├┤M├──────
     ├───┤      ░       ░ ├───┤└╥┘┌─┐   
q_1: ┤ H ├──────░───────░─┤ H ├─╫─┤M├───
     ├───┤      ░       ░ ├───┤ ║ └╥┘┌─┐
q_2: ┤ H ├──────░───────░─┤ H ├─╫──╫─┤M├
     ├───┤┌───┐ ░ ┌───┐ ░ └───┘ ║  ║ └╥┘
q_3: ┤ X ├┤ H ├─░─┤ X ├─░───────╫──╫──╫─
     └───┘└───┘ ░ └───┘ ░       ║  ║  ║ 
c: 3/═══════════════════════════╩══╩══╩═
                                0  1  2 
Corriendo el circuito de Deutsch-Jozsa:
000: constante
`
