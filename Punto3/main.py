def main():
    n_is_valid = False
    
    while not n_is_valid:
        try:
            n = int(input("Ingrese un número mayor que 0\n"))
            if(n <= 0):
                raise Exception("El número es menor o igual a 0.")
            else:
                n_is_valid = True
        except Exception as e:
            print(f"Error: {e}\nIntente nuevamente")

    imprimir_numeros_pares(n)
    imprimir_numeros_impares(n)
    imprimir_numeros_primos(n)
        
def imprimir_numeros_pares(n):
    print(f"Numeros pares desde 1 hasta {n}:")
    for i in range(1, n + 1):
        print(i) if i % 2 == 0 else ""

def imprimir_numeros_impares(n):
    print(f"Numeros impares desde 1 hasta {n}:")
    for i in range(1, n + 1):
        print(i) if i % 2 != 0 else "" 
        
def imprimir_numeros_primos(n):
    print(f"Numeros primos desde 1 hasta {n}:")
    is_prime = False
    for i in range(1, n + 1):
        for j in range(1, i):
            if i % j == 0 and j != 1:
                is_prime = False
                break
            else:
                is_prime = True
        print(i) if is_prime else ""

if "__main__" == __name__:
    main()