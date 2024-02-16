import pandas as pd
import math

def main():
    df = pd.read_csv('Guia_CSV_251 2.csv')
        
    B = df[df["Clase"] == 'CAMPERO']["2018"].mean(skipna=True)
    print(B)
    
    C = df[df["Clase"] == 'AUTOMOVIL']["2018"].mean(skipna=True)
    print(C)
    
    A = math.ceil((B - C)/100)
    print(A)

if "__main__" == __name__:
    main()