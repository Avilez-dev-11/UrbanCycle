import qiskit
from qiskit_aer import AerSimulator

def optimize_route():
    # Create a quantum circuit with 2 qubits
    qc = qiskit.QuantumCircuit(2)
    qc.h([0, 1])  # Apply Hadamard gates to both qubits
    qc.cx(0, 1)   # Apply a CNOT gate

    # Initialize the Aer simulator directly from qiskit
    simulator = AerSimulator()

    # Transpile the circuit for the Aer simulator
    transpiled_qc = qiskit.transpile(qc, simulator)

    # Run the circuit on the simulator
    result = simulator.run(transpiled_qc, shots=1024).result()


    # Get the measurement counts
    counts = result.get_counts()
    return counts

if __name__ == "__main__":
    result = optimize_route()
    print(f"Optimization Result: {result}")