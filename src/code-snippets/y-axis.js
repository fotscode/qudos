export const pauli_y_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22~3vm4%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22Y%22%2C%22Y%22%2C%22Y%22%2C%22Y%22%2C%22Y%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%5D%7D`
export const pauli_y_qiskit_example_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(1)
qc.y(0) # aplica la puerta Y al qubit 0
`

export const roty_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%2C%5B%22Y%5E%C2%BD%22%2C%22Y%5E-%C2%BD%22%2C%22Y%5E%C2%BC%22%2C%22Y%5E-%C2%BC%22%2C%22Y%5Et%22%5D%2C%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%5D%7D`
export const roty_qiskit_example_code=`
from qiskit import QuantumCircuit
import numpy as np
pi = np.pi
qc = QuantumCircuit(1)
qc.ry(pi, 0) # aplica una rotacion de pi al qubit 0 en el eje y
`

export const cy_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22Y%22%5D%2C%5B%22Chance%22%2C%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22%E2%97%A6%22%2C%22Y%22%5D%2C%5B%22Chance%22%2C%22Chance%22%2C%22Chance%22%5D%2C%5B%22%E2%80%A2%22%2C%22Y%22%2C%22%E2%80%A2%22%5D%5D%2C%22init%22%3A%5B1%2C1%5D%7D`
export const cy_qiskit_example_code=`
from qiskit import QuantumCircuit
from qiskit.circuit.library import CYGate
qc = QuantumCircuit(3)
qc.cy(0, 1) # condicion en 0, objetivo en 1
qc.barrier()
toff_y=CYGate().control(1)
qc.append(toff_y,[0,2,1]) # condicion en 0 y 2, objetivo en 1
print(qc)
`
export const cy_qiskit_example_result=`
           ░      
q_0: ──■───░───■──
     ┌─┴─┐ ░ ┌─┴─┐
q_1: ┤ Y ├─░─┤ Y ├
     └───┘ ░ └─┬─┘
q_2: ──────░───■──
           ░      
`
