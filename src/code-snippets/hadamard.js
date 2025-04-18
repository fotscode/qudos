export const hadamard_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%5D%7D`
export const hadamard_qiskit_example_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(1)
qc.h(0) # aplica la puerta Hadamard al qubit 0
`

