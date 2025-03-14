export const superdense_coding_example_tp=`https://algassert.com/quirk#circuit={%22cols%22:[[1,1,%22H%22],[1,1,%22%E2%80%A2%22,1,1,1,%22X%22],[%22%E2%80%A6%22,%22%E2%80%A6%22,%22%E2%80%A6%22,%22%E2%80%A6%22,%22%E2%80%A6%22,%22%E2%80%A6%22,%22%E2%80%A6%22],[%22Measure%22,%22Measure%22],[%22~msg%22],[%22Chance%22,%22Chance%22],[%22~enc%22],[%22%E2%80%A2%22,1,%22Z%22],[1,%22%E2%80%A2%22,%22X%22],[1,1,1,%22~send%22],[1,1,%22Swap%22,1,1,%22Swap%22],[1,1,1,1,1,%22~dec%22],[1,1,1,1,1,%22%E2%80%A2%22,%22X%22],[1,1,1,1,1,%22H%22],[1,1,1,1,1,%22Measure%22,%22Measure%22],[1,1,1,1,1,%22~msg%22],[1,1,1,1,1,%22Chance%22,%22Chance%22]],%22gates%22:[{%22id%22:%22~msg%22,%22name%22:%22message%22,%22matrix%22:%22{{1,0,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}}%22},{%22id%22:%22~enc%22,%22name%22:%22encode%22,%22matrix%22:%22{{1,0,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}}%22},{%22id%22:%22~send%22,%22name%22:%22send%22,%22matrix%22:%22{{1,0,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}}%22},{%22id%22:%22~dec%22,%22name%22:%22decode%22,%22matrix%22:%22{{1,0,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}}%22}],%22init%22:[1,1]}`

export const superdense_coding_example_result=`
                                    ░ ┌───┐┌─┐    ░                                                                          ░       ░       ░        ░ 
                 data_0: ───────────░─┤ X ├┤M├────░──────────────────────────────────────────────────────────────────────────░───────░───────░────────░─
                                    ░ ├───┤└╥┘┌─┐ ░                                                                          ░       ░       ░        ░ 
                 data_1: ───────────░─┤ X ├─╫─┤M├─░──────────────────────────────────────────────────────────────────────────░───────░───────░────────░─
                         ┌───┐      ░ └───┘ ║ └╥┘ ░        ┌──────┐        ┌───┐┌───────┐      ┌──────┐      ┌───┐┌───────┐  ░       ░ ┌───┐ ░ ┌─┐    ░ 
       parentrelazado_0: ┤ H ├──■───░───────╫──╫──░────────┤ If-0 ├────────┤ Z ├┤ End-0 ├──────┤ If-0 ├──────┤ X ├┤ End-0 ├──░───■───░─┤ H ├─░─┤M├────░─
                         └───┘┌─┴─┐ ░       ║  ║  ░        └──╥───┘        └───┘└───────┘      └──╥───┘      └───┘└───────┘  ░ ┌─┴─┐ ░ └───┘ ░ └╥┘┌─┐ ░ 
       parentrelazado_1: ─────┤ X ├─░───────╫──╫──░───────────╫───────────────────────────────────╫──────────────────────────░─┤ X ├─░───────░──╫─┤M├─░─
                              └───┘ ░       ║  ║  ░ ┌─────────╨─────────┐               ┌─────────╨─────────┐                ░ └───┘ ░       ░  ║ └╥┘ ░ 
          dataclasica: 2/═══════════════════╩══╩════╡ dataclasica_0=0x1 ╞═══════════════╡ dataclasica_1=0x1 ╞═══════════════════════════════════╬══╬════
                                            0  1    └───────────────────┘               └───────────────────┘                                   ║  ║    
parentrelazadoclasico: 2/═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╩══╩════
                                                                                                                                                0  1    
Probabilidad de recibir 11 en los qubits entrelazados:  1.0
`

export const superdense_coding_example_code=`
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister, transpile
from qiskit_aer import QasmSimulator

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled).result()
    return result

# estados cuánticos
data = QuantumRegister(2, name="data")
entangledpair = QuantumRegister(2, name="parentrelazado")

# estados clásicos
data_c = ClassicalRegister(2, name="dataclasica")
entangledpair_c = ClassicalRegister(2, name="parentrelazadoclasico")

# circuito cuántico
qc = QuantumCircuit(
    data, entangledpair, data_c, entangledpair_c
)

# Entrelazamiento de qubits
qc.h(entangledpair[0])
qc.cx(entangledpair[0], entangledpair[1])
qc.barrier()

# Establecer bits a transmitir en 11 a partir de dos qubits
qc.x(data)
qc.measure(data, data_c)
qc.barrier()

# Aplicar Z y X condicionalmente para encodear 2 bits en un qubit entrelazado
with qc.if_test((data_c[0], 1)):
    qc.z(entangledpair[0])
with qc.if_test((data_c[1], 1)):
    qc.x(entangledpair[0])
qc.barrier()

# Aplicar CNOT con primer qubit como control y segundo como target
qc.cx(entangledpair[0], entangledpair[1])
qc.barrier()

# Aplicar H sobre primer qubit para quitar entrelazamiento
qc.h(entangledpair[0])
qc.barrier()

# Medir ambos qubits
qc.measure(entangledpair[0], entangledpair_c[0])
qc.measure(entangledpair[1], entangledpair_c[1])
qc.barrier()

res = run_circuit(qc)

print(qc.draw())
counts = res.get_counts()

measure_eq_11 = 0
measure_neq_11 = 0
for key in counts:
    if key[-2:] == "11":
        measure_eq_11 += counts[key]
    else:
        measure_neq_11 += counts[key]

print("Probabilidad de recibir 11 en los qubits entrelazados: ", measure_eq_11 / (measure_eq_11 + measure_neq_11))
`
