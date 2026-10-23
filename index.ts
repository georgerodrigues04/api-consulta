function somar(numero1: number, numero2: number): number {
    try {
        if (typeof numero1 !== "number" || typeof numero2 !== "number") {
            throw new Error("Os parâmetros devem ser números!");
        }

        return numero1 + numero2;
    } catch (error) {
        console.error("Erro ao somar:", error);
        return 0;
    }
}

console.log(somar("sd" as any, 2));