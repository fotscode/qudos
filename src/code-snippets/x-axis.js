export const pauli_x_example_quirk=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22~3vm4%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22X%22%2C%22X%22%2C%22X%22%2C%22X%22%2C%22X%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%5D%7D`
export const pauli_x_qiskit_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(1)
qc.x(0) # aplica la puerta X al qubit 0
`


export const rotx_example_quirk=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%2C%5B%22X%5E%C2%BD%22%2C%22X%5E-%C2%BD%22%2C%22X%5E%C2%BC%22%2C%22X%5E-%C2%BC%22%2C%22X%5Et%22%5D%2C%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%5D%7D`
export const rotx_qiskit_code=`
from qiskit import QuantumCircuit
import numpy as np
pi = np.pi
qc = QuantumCircuit(1)
qc.rx(pi, 0) # aplica una rotacion de pi al qubit 0 en el eje x
`
