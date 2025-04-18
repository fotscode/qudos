export const cnot_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C%22~q2bg%22%5D%2C%5B%22Amps2%22%2C1%2C%22Amps2%22%2C1%2C%22Amps2%22%2C1%2C%22Amps2%22%2C1%2C%22Amps2%22%5D%2C%5B%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C1%2C1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22Amps2%22%2C1%2C%22Amps2%22%2C1%2C%22Amps2%22%2C1%2C%22Amps2%22%2C1%2C%22Amps2%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~q2bg%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C0%2C1%2C0%2C%22%2B%22%2C0%2C%22-%22%5D%7D`
export const cnot_qiskit_example_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(2)
qc.cx(0, 1) # condicion en 0, objetivo en 1
`

export const toffoli_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22Chance%22%2C%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22%E2%97%A6%22%2C%22X%22%5D%2C%5B%22Chance%22%2C%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22X%22%2C%22%E2%80%A2%22%5D%2C%5B%22Chance%22%2C%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22%E2%80%A2%22%2C%22X%22%5D%5D%2C%22init%22%3A%5B1%2C1%5D%7D`

export const toffoli_qiskit_example_code=`
from qiskit import QuantumCircuit
from qiskit.circuit.library import CXGate
qc = QuantumCircuit(3)
toff=CXGate().control(1)
qc.append(toff,[0,2,1]) # condicion en 0 y 2, objetivo en 1
qc.barrier()
qc.append(toff,[0,1,2]) # condicion en 0 y 1, objetivo en 2
print(qc)
`

export const toffoli_qiskit_example_result=`
           ░      
q_0: ──■───░───■──
     ┌─┴─┐ ░   │  
q_1: ┤ X ├─░───■──
     └─┬─┘ ░ ┌─┴─┐
q_2: ──■───░─┤ X ├
           ░ └───┘
`
