export const swap_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22~3vm4%22%2C%22~3vm4%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22Swap%22%2C%22Swap%22%5D%2C%5B1%2C1%2C%22Swap%22%2C%22Swap%22%5D%2C%5B1%2C1%2C1%2C1%2C%22Swap%22%2C%22Swap%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%2C0%2C%22%2B%22%5D%7D`
export const swap_qiskit_example_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(2)
qc.swap(0, 1) # intercambia 0 con 1
`
export const swap_quirk_cnot=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22~3vm4%22%2C%22~3vm4%22%2C%22~3vm4%22%2C%22~3vm4%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22Swap%22%2C%22Swap%22%5D%2C%5B1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C1%2C%22X%22%2C%22%E2%80%A2%22%5D%2C%5B1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C%22%2B%22%2C0%2C%22%2B%22%5D%7D`

export const cswap_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%2C%5B1%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22%E2%80%A2%22%2C%22Swap%22%2C%22Swap%22%5D%2C%5B%22%E2%97%A6%22%2C1%2C1%2C%22Swap%22%2C%22Swap%22%5D%2C%5B1%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B1%2C%22%2B%22%2C1%2C%22-%22%5D%7D`

export const cswap_qiskit_example_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(3)
qc.cswap(0, 1, 2) # intercambia los qubits 1 y 2 si el qubit 0 es 1
print(qc)
`
