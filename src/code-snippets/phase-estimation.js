export const quirk_phase_estimation_hadamard=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%7B%22id%22%3A%22Ryft%22%2C%22arg%22%3A%22pi%2F4%22%7D%5D%2C%5B%22%E2%80%A2%22%2C1%2C1%2C1%2C%22H%22%5D%2C%5B%22QFT%E2%80%A04%22%5D%2C%5B%22Chance4%22%5D%5D%7D`

export const qiskit_phase_estimation_hadamard_result=`
     ┌───┐            ░       ░       ░                                ░       ░                      ░       ░            ░ ┌───┐ ░       ┌─┐      
q_0: ┤ H ├────────────░───■───░───────░──────────────────────■─────────░───────░────────────■─────────░───────░──■─────────░─┤ H ├─░──X────┤M├──────
     ├───┤            ░   │   ░       ░                      │         ░       ░            │         ░ ┌───┐ ░  │P(-π/2)  ░ └───┘ ░  │    └╥┘┌─┐   
q_1: ┤ H ├────────────░───┼───░───────░────────────■─────────┼─────────░───────░──■─────────┼─────────░─┤ H ├─░──■─────────░───────░──┼──X──╫─┤M├───
     ├───┤            ░   │   ░       ░            │         │         ░ ┌───┐ ░  │P(-π/2)  │P(-π/4)  ░ └───┘ ░            ░       ░  │  │  ║ └╥┘┌─┐
q_2: ┤ H ├────────────░───┼───░───────░──■─────────┼─────────┼─────────░─┤ H ├─░──■─────────■─────────░───────░────────────░───────░──┼──X──╫──╫─┤M├
     ├───┤            ░   │   ░ ┌───┐ ░  │P(-π/2)  │P(-π/4)  │P(-π/8)  ░ └───┘ ░                      ░       ░            ░       ░  │ ┌─┐ ║  ║ └╥┘
q_3: ┤ H ├────────────░───┼───░─┤ H ├─░──■─────────■─────────■─────────░───────░──────────────────────░───────░────────────░───────░──X─┤M├─╫──╫──╫─
     ├───┤┌─────────┐ ░ ┌─┴─┐ ░ └───┘ ░                                ░       ░                      ░       ░            ░       ░    └╥┘ ║  ║  ║ 
q_4: ┤ X ├┤ Ry(π/4) ├─░─┤ H ├─░───────░────────────────────────────────░───────░──────────────────────░───────░────────────░───────░─────╫──╫──╫──╫─
     └───┘└─────────┘ ░ └───┘ ░       ░                                ░       ░                      ░       ░            ░       ░     ║  ║  ║  ║ 
c: 4/════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╩══╩══╩══╩═
                                                                                                                                         3  0  1  2 
Resultados: {'1000': 1024}
Porcentajes: {'1000': '100.00%'}
`

export const qiskit_phase_estimation_hadamard_code=`
from qiskit import QuantumCircuit, transpile
from qiskit_aer import QasmSimulator
import math

QUBIT_COUNT = 4
QUBITS = range(QUBIT_COUNT)

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled.decompose(reps=6)).result()
    return result

def analyze_pe_results(results):
    counts = results.get_counts()
    print("Resultados:", counts)
    total = sum(counts.values())
    percentages = {key: f"{value / total*100:.2f}%" for key, value in counts.items()}
    ordered_percentages = dict(sorted(percentages.items(), key=lambda item: item[1], reverse=True))
    print("Porcentajes:", ordered_percentages)

def inverse_qft(qc):
    """
    Aplica la Transformada de Fourier Cuántica inversa al circuito
    """
    for i in range(QUBIT_COUNT-1):
        qc.h(QUBIT_COUNT-1-i)
        qc.barrier()
        for j in range(QUBIT_COUNT-i-1):
            qc.cp(-math.pi/(2**(j+1)), QUBIT_COUNT-2-i-j, QUBIT_COUNT-1-i)
        qc.barrier()

    qc.h(0)
    # swap
    qc.barrier()
    for i in range(QUBIT_COUNT//2):
        qc.swap(i, QUBIT_COUNT-i-1)


def controlled_hadamard(qc, control):
    """
    Aplica una compuerta de Hadamard controlada al qubit objetivo.
    Como Hadamard controlada es una compuerta hermitiana (su inversa es ella misma)
    Solo se necesita una compuerta Hadamard y es en el primer qubit, 
    el resto al ser cantidades pares (2 veces en el segundo, 4 en el tercero, etc)
    se cancelan 
    """
    if control & 1:
        qc.ch(control>>1, QUBIT_COUNT)

def phase_estimation(qc,  cont_u):
    """
    Realiza la estimación de fase cuántica en un circuito
    """
    qc.h(QUBITS)
    qc.barrier()

    for j in range(QUBIT_COUNT):
        cont_u(qc, 1<<j)

    qc.barrier()
    inverse_qft(qc)


qc = QuantumCircuit(QUBIT_COUNT+1, QUBIT_COUNT)

# inicializacion de un autovector de Hadamard
qc.x(QUBIT_COUNT)
qc.ry(math.pi/4, QUBIT_COUNT)

phase_estimation(qc, controlled_hadamard)
qc.measure(QUBITS, QUBITS)

print(qc.draw())

res = run_circuit(qc)
analyze_pe_results(res)
`
