function sumar (a, b) {
  return a + b;
}
const restar = (a, b) => { 
  return a - b 
};
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;




export default sumar; // de forma "por defecto"
export { restar, multiplicar, dividir }; // de forma "nombrada"
