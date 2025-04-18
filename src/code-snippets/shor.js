export const shor_quirk_7_mod_15 = `https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C%7B%22id%22%3A%22setA%22%2C%22arg%22%3A7%7D%2C1%2C%7B%22id%22%3A%22setR%22%2C%22arg%22%3A15%7D%5D%2C%5B%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22X%22%5D%2C%5B%22%E2%80%A2%22%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C%22*AmodR4%22%5D%2C%5B1%2C%22%E2%80%A2%22%2C1%2C1%2C1%2C1%2C1%2C1%2C%22~h2e1%22%5D%2C%5B1%2C1%2C%22%E2%80%A2%22%2C1%2C1%2C1%2C1%2C1%2C%22~3h3%22%5D%2C%5B1%2C1%2C1%2C%22%E2%80%A2%22%2C1%2C1%2C1%2C1%2C%22~7iee%22%5D%2C%5B1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C1%2C1%2C1%2C%22~r1i6%22%5D%2C%5B1%2C1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C1%2C1%2C%22~5uaa%22%5D%2C%5B1%2C1%2C1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C1%2C%22~6q28%22%5D%2C%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C%22%E2%80%A2%22%2C%22~qjkm%22%5D%2C%5B%22QFT%E2%80%A08%22%5D%2C%5B%22Chance8%22%5D%2C%5B%22Sample8%22%5D%5D%2C%22gates%22%3A%5B%7B%22id%22%3A%22~h2e1%22%2C%22name%22%3A%22xA2%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22*AmodR4%22%5D%2C%5B%22*AmodR4%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~3h3%22%2C%22name%22%3A%22xA4%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22~h2e1%22%5D%2C%5B%22~h2e1%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~7iee%22%2C%22name%22%3A%22xA8%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22~3h3%22%5D%2C%5B%22~3h3%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~r1i6%22%2C%22name%22%3A%22xA16%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22~7iee%22%5D%2C%5B%22~7iee%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~5uaa%22%2C%22name%22%3A%22xA32%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22~r1i6%22%5D%2C%5B%22~r1i6%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~6q28%22%2C%22name%22%3A%22xA64%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22~5uaa%22%5D%2C%5B%22~5uaa%22%5D%5D%7D%7D%2C%7B%22id%22%3A%22~qjkm%22%2C%22name%22%3A%22xA128%22%2C%22circuit%22%3A%7B%22cols%22%3A%5B%5B%22~6q28%22%5D%2C%5B%22~6q28%22%5D%5D%7D%7D%5D%7D`
export const shor_quirk_7_mod_58 =`https://algassert.com/quirk#circuit=%7B%22cols%22%3A%5B%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C%7B%22id%22%3A%22setB%22%2C%22arg%22%3A7%7D%2C1%2C%7B%22id%22%3A%22setR%22%2C%22arg%22%3A58%7D%5D%2C%5B%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22H%22%2C%22X%22%5D%2C%5B%22inputA10%22%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C%22*BToAmodR6%22%5D%2C%5B%22QFT%E2%80%A010%22%5D%2C%5B%22Chance10%22%5D%2C%5B%22Sample10%22%5D%5D%7D`
export const shor_qiskit_7_mod_15_code_main = `
import sys
import random
from math import gcd
from modules.initialization import initialization
from modules.continued_fractions import get_order
from modules.shor_phase_estimation import shor_cmod15

N=15
res = initialization(N)
finished = False
max_tries = 1000000
while not finished and max_tries > 0:
    max_tries -= 1
    candidate = random.choice([7])
    if gcd(N, candidate) != 1:
        continue
    s_over_r_results = shor_cmod15(candidate)
    s_over_r_binary = max(s_over_r_results, key=s_over_r_results.get)
    r = get_order(s_over_r_binary, N)
    if r == -1:
        continue
    print(f"Candidato: {candidate}, r: {r}, s_sobre_r: {s_over_r_binary}")
    print(f"{candidate}^{r} mod {N}: {candidate**r % N}")
    if (
        r % 2 == 1
        or candidate**r % N != 1
        or candidate ** (r // 2) % N == 1
        or candidate ** (r // 2) % N == N - 1
    ):
        print("Obtener otro candidato.")
        continue
    p = gcd(N, candidate ** int(r / 2) - 1)
    q = gcd(N, candidate ** int(r / 2) + 1)

    finished = True
    print(f"p: {p}, q: {q} [Shor]")

if not finished:
    print("Fallo al factorizar N.")
    sys.exit(1)
`
export const shor_qiskit_7_mod_15_code_init = `
from math import sqrt, ceil
import sys

def is_prime(n: int) -> bool:
    """
    Determina si un número es primo.
    """
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def eratosthenes(n):
    """
    Criba de Eratóstenes para encontrar los números primos menores o iguales a n.
    """
    multiples = []
    for i in range(2, n+1):
        if i not in multiples:
            for j in range(i*i, n+1, i):
                multiples.append(j)
    return [x for x in range(2, n+1) if x not in multiples]


def power_of_prime(primes, N):
    """
    Determina si N es una potencia de un número primo.
    """
    for p in primes:
        if N % p == 0:
            exp=0
            while N % p == 0:
                N = N // p
                exp += 1
            if N == 1:
                return p, exp
            else:
                return -1,-1
    return -1,-1


def initialization(N):
    if N % 2 == 0:
        print(f"p: 2, q: {int(N/2)} [N es par]")
        sys.exit(0)

    if is_prime(N):
        print(f"p: {N}, q: 1 [N es primo]")
        sys.exit(0)

    prime_factors = eratosthenes(ceil(sqrt(N)))
    x, exp = power_of_prime(prime_factors, N)
    if x != -1:
        print(f"p: {x}, q: {x**(exp-1)} [N es potencia de un número primo]")
        sys.exit(0)
`
export const shor_qiskit_7_mod_15_code_shor = `
from qiskit import QuantumCircuit, transpile
from qiskit_aer import QasmSimulator
import numpy as np

N_COUNT = 8  # qubits de salida

def run_circuit(qc: QuantumCircuit):
    sim = QasmSimulator()
    transpiled = transpile(qc)
    result = sim.run(transpiled.decompose(reps=6)).result()
    return result

def c_amod15(a, power):
    """
    Puerta controlada de multiplicación por a módulo 15.
    """
    if a not in [2,4,7,8,11,13]:
        raise ValueError("'a' debe ser 2,4,7,8,11 o 13")
    U = QuantumCircuit(4)
    for _iteration in range(power):
        if a in [2,13]:
            U.swap(2,3)
            U.swap(1,2)
            U.swap(0,1)
        if a in [7,8]:
            U.swap(0,1)
            U.swap(1,2)
            U.swap(2,3)
        if a in [4, 11]:
            U.swap(1,3)
            U.swap(0,2)
        if a in [7,11,13]:
            for q in range(4):
                U.x(q)
    U = U.to_gate()
    U.name = f"{a}^{power} mod 15"
    c_U = U.control()
    return c_U

def qft_dagger(n):
    """
    Aplica la Transformada de Fourier Cuántica inversa de n qubits al circuito
    """
    qc = QuantumCircuit(n)
    # Don't forget the Swaps!
    for qubit in range(n//2):
        qc.swap(qubit, n-qubit-1)
    for j in range(n):
        for m in range(j):
            qc.cp(-np.pi/float(2**(j-m)), m, j)
        qc.h(j)
    qc.name = "QFT†"
    return qc

def shor_cmod15(a):
    """
    Estimación de fase aplicada a buscar el orden de N=15
    """
    # N_COUNT qubits de salida, y 4 qubits para U (qubits de entrada)
    qc = QuantumCircuit(N_COUNT + 4, N_COUNT)
    
    # creación de superposición
    for q in range(N_COUNT):
        qc.h(q)
    
    # inicialización de qubits de entrada en |1>
    qc.x(N_COUNT)
    
    # aplicación de puertas controladas
    for q in range(N_COUNT):
        qc.append(c_amod15(a, 2**q),
                 [q] + [i+N_COUNT for i in range(4)])
    
    # inversa QFT
    qc.append(qft_dagger(N_COUNT), range(N_COUNT))
    
    # medición
    qc.measure(range(N_COUNT), range(N_COUNT))
    print(qc.draw(fold=-1))
    
    res=run_circuit(qc)
    return res.get_counts()
`
export const shor_qiskit_7_mod_15_code_fraction = `
def decimal_from_binary(binary: str):
    """
    Convierte un número binario a un número decimal.
    """
    decimal = 0
    for i in range(len(binary)):
        decimal += int(binary[i]) * 2 ** -(i + 1)
    fraction_num = int(decimal * 10 ** len(binary))
    fraction_denom = int(10 ** len(binary))
    return fraction_num, fraction_denom


def continued_fraction(num: int, denom: int, res=[], debug=False):
    """
    Convierte un decimal a una fracción continua.
    """
    division = denom // num
    rest = denom % num
    res.append(division)
    if debug:
        print("[num]:", num, "[denom]:", denom, "[division]:", division, "[rest]:", rest)
    if rest == 0:
        return [0] + res
    return continued_fraction(rest, num, res, debug=debug)


def from_continued_fraction(continued_fraction):
    """
    Convierte una fracción continua a la fracción correspondiente.
    """
    num, denom = 1, 0
    for u in reversed(continued_fraction):
        num, denom = denom + num * u, num
    return num, denom


def get_order(binary_decimal: str, N: int, debug=False):
    fraction_num, fraction_denom = decimal_from_binary(binary_decimal)
    if fraction_num == 0:
        return -1
    if debug:
        print(f"Fracción: {fraction_num}/{fraction_denom}")
    fractions = continued_fraction(fraction_num, fraction_denom, res=[], debug=debug)
    if debug:
        print("Fracción continua:", fractions)
    
    i = 1
    finish = i-1 == len(fractions)
    order=0
    while not finish:
        s, r = from_continued_fraction(fractions[0:i])
        if debug:
            print("[s]:", s, "[r]:", r)
        if r > N:
            break
        i += 1
        finish = i-1 == len(fractions)
        order = r
    
    return order
`

export const shor_qiskit_7_mod_15_result = `
      ┌───┐                                                                                                                             ┌───────┐┌─┐                     
 q_0: ┤ H ├───────■─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤0      ├┤M├─────────────────────
      ├───┤       │                                                                                                                     │       │└╥┘┌─┐                  
 q_1: ┤ H ├───────┼──────────────■──────────────────────────────────────────────────────────────────────────────────────────────────────┤1      ├─╫─┤M├──────────────────
      ├───┤       │              │                                                                                                      │       │ ║ └╥┘┌─┐               
 q_2: ┤ H ├───────┼──────────────┼──────────────■───────────────────────────────────────────────────────────────────────────────────────┤2      ├─╫──╫─┤M├───────────────
      ├───┤       │              │              │                                                                                       │       │ ║  ║ └╥┘┌─┐            
 q_3: ┤ H ├───────┼──────────────┼──────────────┼──────────────■────────────────────────────────────────────────────────────────────────┤3      ├─╫──╫──╫─┤M├────────────
      ├───┤       │              │              │              │                                                                        │  QFT† │ ║  ║  ║ └╥┘┌─┐         
 q_4: ┤ H ├───────┼──────────────┼──────────────┼──────────────┼──────────────■─────────────────────────────────────────────────────────┤4      ├─╫──╫──╫──╫─┤M├─────────
      ├───┤       │              │              │              │              │                                                         │       │ ║  ║  ║  ║ └╥┘┌─┐      
 q_5: ┤ H ├───────┼──────────────┼──────────────┼──────────────┼──────────────┼───────────────■─────────────────────────────────────────┤5      ├─╫──╫──╫──╫──╫─┤M├──────
      ├───┤       │              │              │              │              │               │                                         │       │ ║  ║  ║  ║  ║ └╥┘┌─┐   
 q_6: ┤ H ├───────┼──────────────┼──────────────┼──────────────┼──────────────┼───────────────┼───────────────■─────────────────────────┤6      ├─╫──╫──╫──╫──╫──╫─┤M├───
      ├───┤       │              │              │              │              │               │               │                         │       │ ║  ║  ║  ║  ║  ║ └╥┘┌─┐
 q_7: ┤ H ├───────┼──────────────┼──────────────┼──────────────┼──────────────┼───────────────┼───────────────┼────────────────■────────┤7      ├─╫──╫──╫──╫──╫──╫──╫─┤M├
      ├───┤┌──────┴──────┐┌──────┴──────┐┌──────┴──────┐┌──────┴──────┐┌──────┴───────┐┌──────┴───────┐┌──────┴───────┐┌───────┴───────┐└───────┘ ║  ║  ║  ║  ║  ║  ║ └╥┘
 q_8: ┤ X ├┤0            ├┤0            ├┤0            ├┤0            ├┤0             ├┤0             ├┤0             ├┤0              ├──────────╫──╫──╫──╫──╫──╫──╫──╫─
      └───┘│             ││             ││             ││             ││              ││              ││              ││               │          ║  ║  ║  ║  ║  ║  ║  ║ 
 q_9: ─────┤1            ├┤1            ├┤1            ├┤1            ├┤1             ├┤1             ├┤1             ├┤1              ├──────────╫──╫──╫──╫──╫──╫──╫──╫─
           │  7^1 mod 15 ││  7^2 mod 15 ││  7^4 mod 15 ││  7^8 mod 15 ││  7^16 mod 15 ││  7^32 mod 15 ││  7^64 mod 15 ││  7^128 mod 15 │          ║  ║  ║  ║  ║  ║  ║  ║ 
q_10: ─────┤2            ├┤2            ├┤2            ├┤2            ├┤2             ├┤2             ├┤2             ├┤2              ├──────────╫──╫──╫──╫──╫──╫──╫──╫─
           │             ││             ││             ││             ││              ││              ││              ││               │          ║  ║  ║  ║  ║  ║  ║  ║ 
q_11: ─────┤3            ├┤3            ├┤3            ├┤3            ├┤3             ├┤3             ├┤3             ├┤3              ├──────────╫──╫──╫──╫──╫──╫──╫──╫─
           └─────────────┘└─────────────┘└─────────────┘└─────────────┘└──────────────┘└──────────────┘└──────────────┘└───────────────┘          ║  ║  ║  ║  ║  ║  ║  ║ 
 c: 8/════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╩══╩══╩══╩══╩══╩══╩══╩═
                                                                                                                                                  0  1  2  3  4  5  6  7 
Candidato: 7, r: 4, s_sobre_r: 11000000
7^4 mod 15: 1
p: 3, q: 5 [Shor]
`
