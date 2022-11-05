/* 5. PROBLEMA: Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
licencia de software vendida menos el 5% de deducciones por 
impuestos. Codifica un programa que calcule e imprima el 
salario mensual de un vendedor dado */

//FUNCION TRADICIONAL

let valorSalarioMes = 3500000;
let ValorComisionMes = 1500000;

function calcularSalario(numeroLicenciasVendidas) {
  let TotalComision = ValorComisionMes * numeroLicenciasVendidas;
  let totalSalario = valorSalarioMes + TotalComision;
  let deduccion = totalSalario * 0.005;
  let salarioMes = totalSalario - deduccion;
  console.log("----Desprendible pago del mes---");
  console.log("Salario neto:         $" + valorSalarioMes);
  if (numeroLicenciasVendidas > 0) {
    console.log("Comisión del mes:        $" + TotalComision);
  }
  console.log("Total salario Neto:      $" + totalSalario);
  console.log("Sus Deducciónes:         $" + deduccion);
  console.log("Total Salario mes :      $" + salarioMes);
}

calcularSalario(0); // Cuando si hay numeroLicenciasVendidass */

// CONVERTIMOS A FUNCION FLECHA

let calcularSalario = (numeroLicenciasVendidas) => {
  let TotalComision = ValorComisionMes * numeroLicenciasVendidas;
  let totalSalario = valorSalarioMes + TotalComision;
  let deduccion = totalSalario * 0.005;
  let salarioMes = totalSalario - deduccion;
  console.log("----Desprendible pago del mes---");
  console.log("Salario neto:            $" + valorSalarioMes);
  if (numeroLicenciasVendidas > 0) {
    console.log("Comisión del mes:      $" + TotalComision);
  }
  console.log("Total salario Neto:      $" + totalSalario);
  console.log("Sus Deducciónes:         $" + deduccion);
  console.log("Total Salario mes :      $" + salarioMes);
};

calcularSalario(0); // Cuando si hay numeroLicenciasVendidass
