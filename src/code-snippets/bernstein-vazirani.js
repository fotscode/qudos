export const solution_bernstein_vazirani = `
from qiskit import QuantumCircuit
from algorithms import run_circuit, circuit_deutsch_jozsa
import sys

def bv_function(s):
    """
    Crea una función Bernstein-Vazirani desde una cadena de 1s y 0s.
    """
    qc = QuantumCircuit(len(s) + 1)
    qc.barrier()
    for index, bit in enumerate(s):
        if bit == "1":
            qc.cx(index, len(s))
    qc.barrier()
    return qc

def analyze_bv_results(results):
    counts = results.get_counts()
    return counts

s_string = "1010"
if len(sys.argv) >= 2:
    s_string = sys.argv[1] # permite utilizar cadena por parametro
print("Cadena secreta 's':", s_string)
print("Oráculo:")
oracle = bv_function(s_string) # codifica la función secreta con 's'
print(oracle.draw())
print("Bernstein-Vazirani con circuito Deutsch-Jozsa:")
bv_circuit = circuit_deutsch_jozsa(oracle)
print(bv_circuit.draw())
print("Corriendo el circuito Bernstein-Vazirani:")
print(analyze_bv_results(run_circuit(bv_circuit) ))
`

export const results_1010_bernstein_vazirani = `
Cadena secreta 's': 1010
Oráculo:
      ░            ░ 
q_0: ─░───■────────░─
      ░   │        ░ 
q_1: ─░───┼────────░─
      ░   │        ░ 
q_2: ─░───┼────■───░─
      ░   │    │   ░ 
q_3: ─░───┼────┼───░─
      ░ ┌─┴─┐┌─┴─┐ ░ 
q_4: ─░─┤ X ├┤ X ├─░─
      ░ └───┘└───┘ ░ 
Bernstein-Vazirani con circuito Deutsch-Jozsa:
     ┌───┐      ░            ░ ┌───┐┌─┐         
q_0: ┤ H ├──────░───■────────░─┤ H ├┤M├─────────
     ├───┤      ░   │        ░ ├───┤└╥┘┌─┐      
q_1: ┤ H ├──────░───┼────────░─┤ H ├─╫─┤M├──────
     ├───┤      ░   │        ░ ├───┤ ║ └╥┘┌─┐   
q_2: ┤ H ├──────░───┼────■───░─┤ H ├─╫──╫─┤M├───
     ├───┤      ░   │    │   ░ ├───┤ ║  ║ └╥┘┌─┐
q_3: ┤ H ├──────░───┼────┼───░─┤ H ├─╫──╫──╫─┤M├
     ├───┤┌───┐ ░ ┌─┴─┐┌─┴─┐ ░ └───┘ ║  ║  ║ └╥┘
q_4: ┤ X ├┤ H ├─░─┤ X ├┤ X ├─░───────╫──╫──╫──╫─
     └───┘└───┘ ░ └───┘└───┘ ░       ║  ║  ║  ║ 
c: 4/════════════════════════════════╩══╩══╩══╩═
                                     0  1  2  3 
Corriendo el circuito Bernstein-Vazirani:
{'0101': 1024}
`

export const bv_example = `https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B1%2C1%2C1%2C%22%E2%80%A2%22%2C%22X%22%5D%2C%5B1%2C%22%E2%80%A2%22%2C1%2C1%2C%22X%22%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%5D%2C%5B%22Measure%22%2C%22Measure%22%2C%22Measure%22%2C%22Measure%22%5D%5D%7D`
