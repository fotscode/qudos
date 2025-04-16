export const pauli_z_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22~3vm4%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22Z%22%2C%22Z%22%2C%22Z%22%2C%22Z%22%2C%22Z%22%5D%2C%5B%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%2C%22Amps1%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%5D%7D`
export const pauli_z_qiskit_example_code=`
from qiskit import QuantumCircuit
qc = QuantumCircuit(1)
qc.z(0) # aplica la puerta Z al qubit 0
`

export const rotz_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%2C%5B%22Z%5E%C2%BD%22%2C%22Z%5E-%C2%BD%22%2C%22Z%5E%C2%BC%22%2C%22Z%5E-%C2%BC%22%2C%22Z%5Et%22%5D%2C%5B%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%2C%22Bloch%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~3vm4%22%2C%22name%22%3A%22r%5Et%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22X%5Et%22%5D%2C%5B%22Y%5Et%22%5D%2C%5B%22Z%5Et%22%5D%5D%7D%7D%5D%2C%22init%22%3A%5B0%2C1%2C%22%2B%22%2C%22-%22%2C%22%2B%22%5D%7D`
export const rotz_qiskit_example_code=`
from qiskit import QuantumCircuit
import numpy as np
pi = np.pi
qc = QuantumCircuit(1)
qc.rz(pi, 0) # aplica una rotacion de pi al qubit 0 en el eje z
`


export const cz_quirk_example=`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B%22Bloch%22%2C1%2C%22Amps1%22%5D%2C%5B%22Amps1%22%5D%2C%5B1%2C1%2C%22Z%22%2C%22%E2%80%A2%22%5D%2C%5B%22%E2%80%A2%22%2C%22Z%22%5D%2C%5B%22Amps1%22%2C1%2C%22Amps1%22%5D%2C%5B%5D%2C%5B%22Bloch%22%5D%5D%2C%22init%22%3A%5B%22%2B%22%2C1%2C%22%2B%22%2C1%5D%7D`
export const cz_qiskit_example_code=`
from qiskit import QuantumCircuit
from qiskit.circuit.library import CZGate
import numpy as np
pi = np.pi
qc = QuantumCircuit(3)
qc.cz(0, 1) # condicion en 0, objetivo en 1
qc.barrier()
toff_z=CZGate().control(1)
qc.append(toff_z,[0,2,1]) # condicion en 0 y 2, objetivo en 1
print(qc)
`
export const cz_qiskit_example_result=`
         ░    
q_0: ─■──░──■─
      │  ░  │ 
q_1: ─■──░──■─
         ░  │ 
q_2: ────░──■─
         ░    
`

