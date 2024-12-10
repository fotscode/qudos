export const randomized_tp=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22~5d6h%22%5D%2C%5B%22Amps1%22%2C%22H%22%5D%2C%5B1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22H%22%5D%2C%5B%22Measure%22%2C%22Measure%22%5D%2C%5B1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C1%2C%22Z%22%5D%2C%5B1%2C1%2C%22Amps1%22%5D%2C%5B%5D%2C%5B1%2C1%2C%22~t13i%22%5D%2C%5B1%2C1%2C%22Chance%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~5d6h%22%2C%22name%22%3A%22random%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~t13i%22%2C%22name%22%3A%22random%5E-1%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22Z%5E-t%22%5D%2C%5B%22Y%5E-t%22%5D%2C%5B%22X%5E-t%22%5D%5D%7D%7D%5D%7D`
export const hth_example_tp=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22H%22%5D%2C%5B%22Z%5E%C2%BC%22%5D%2C%5B%22H%22%5D%2C%5B%22Amps1%22%2C%22H%22%5D%2C%5B1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22H%22%5D%2C%5B%22Measure%22%2C%22Measure%22%5D%2C%5B1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C1%2C%22Z%22%5D%2C%5B1%2C1%2C%22H%22%5D%2C%5B1%2C1%2C%22Z%5E-%C2%BC%22%5D%2C%5B1%2C1%2C%22H%22%5D%2C%5B1%2C1%2C%22Amps1%22%5D%2C%5B%5D%2C%5B1%2C1%2C%22Chance%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~5d6h%22%2C%22name%22%3A%22random%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~t13i%22%2C%22name%22%3A%22random%5E-1%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22Z%5E-t%22%5D%2C%5B%22Y%5E-t%22%5D%2C%5B%22X%5E-t%22%5D%5D%7D%7D%5D%7D`

export const hth_example_result=`
                                    ░      ┌───┐┌─────────┐┌───┐ ░      ┌───┐┌─┐ ░                                                                        
             transmisor: ───────────░──|0>─┤ H ├┤ Rz(π/4) ├┤ H ├─░───■──┤ H ├┤M├─░────────────────────────────────────────────────────────────────────────
                         ┌───┐      ░      └───┘└─────────┘└───┘ ░ ┌─┴─┐└┬─┬┘└╥┘ ░                                                                        
         parentrelazado: ┤ H ├──■───░────────────────────────────░─┤ X ├─┤M├──╫──░────────────────────────────────────────────────────────────────────────
                         └───┘┌─┴─┐ ░                            ░ └───┘ └╥┘  ║  ░ ┌────── ┌───┐ ───────┐ ┌────── ┌───┐ ───────┐ ┌───┐┌──────────┐┌───┐┌─┐
               receptor: ─────┤ X ├─░────────────────────────────░────────╫───╫──░─┤ If-0  ┤ X ├  End-0 ├─┤ If-0  ┤ Z ├  End-0 ├─┤ H ├┤ Rz(-π/4) ├┤ H ├┤M├
                              └───┘ ░                            ░        ║   ║  ░ └──╥─── └───┘ ───────┘ └──╥─── └───┘ ───────┘ └───┘└──────────┘└───┘└╥┘
                                                                          ║   ║       ║                   ┌──╨──┐                                       ║ 
    transmisorclasico: 1/═════════════════════════════════════════════════╬═══╩═══════╬═══════════════════╡ 0x1 ╞═══════════════════════════════════════╬═
                                                                          ║   0    ┌──╨──┐                └─────┘                                       ║ 
parentrelazadoclasico: 1/═════════════════════════════════════════════════╩════════╡ 0x1 ╞══════════════════════════════════════════════════════════════╬═
                                                                          0        └─────┘                                                              ║ 
      receptorclasico: 1/═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╩═
                                                                                                                                                        0 
Probabilidad de medir 0 en el receptor:  1.0
`

export const hth_example_code=`
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
import math

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled).result()
    return result

# estados cuánticos
sender = QuantumRegister(1, name="transmisor")
entangledpair = QuantumRegister(1, name="parentrelazado")
receiver = QuantumRegister(1, name="receptor")

# estados clásicos
sender_c = ClassicalRegister(1, name="transmisorclasico")
entangledpair_c = ClassicalRegister(1, name="parentrelazadoclasico")
receiver_c = ClassicalRegister(1, name="receptorclasico")

# circuito cuántico
qc = QuantumCircuit(
    sender, entangledpair, receiver, sender_c, entangledpair_c, receiver_c
)

# componente c1
qc.h(entangledpair)
qc.cx(entangledpair, receiver)
qc.barrier()

# componente c2, U=H T H
qc.reset(sender)
qc.h(sender)
qc.rz(math.radians(45), sender)
qc.h(sender)
qc.barrier()

# componente c3
qc.cx(sender, entangledpair)
qc.h(sender)
qc.measure(sender, sender_c)
qc.measure(entangledpair, entangledpair_c)
qc.barrier()

# componente c4
with qc.if_test((entangledpair_c, 1)):
    qc.x(receiver)
with qc.if_test((sender_c, 1)):
    qc.z(receiver)

# componente c5, U^-1 = H T^-1 H
qc.h(receiver)
qc.rz(math.radians(-45), receiver)
qc.h(receiver)
qc.measure(receiver, receiver_c)

res = run_circuit(qc)

print(qc.draw())
counts = res.get_counts()
# obtener los resultados del 3er qubit
third_qubit_sum0 = 0
third_qubit_sum1 = 0
for key in counts:
    if key[0] == "0":
        third_qubit_sum0 += counts[key]
    else:
        third_qubit_sum1 += counts[key]
print("Probabilidad de medir 0 en el receptor: ", third_qubit_sum0 / (third_qubit_sum0 + third_qubit_sum1))
`
