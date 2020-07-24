import accurateCalc, {
	add, addition, subtract, subtraction, multiply, mul, multiplication, division, divide, modulo, modulus
} from '../src/index'

const methods = ['add', 'subtract', 'multiply', 'division', 'modulo']

describe('accurateCalc', () => {
	methods.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(accurateCalc).toHaveProperty(par)
			expect(accurateCalc[par]).toBeInstanceOf(Function)
		})
	})

	it(`add`, () => {
		expect(accurateCalc.add(1.1, 0.3)).toEqual(1.4)
	})

	it(`subtract`, () => {
		expect(accurateCalc.subtract(1.1, 0.2)).toEqual(0.9)
	})

	it(`multiply`, () => {
		expect(accurateCalc.multiply(1.1, 0.1)).toEqual(0.11)
	})

	it(`division`, () => {
		expect(accurateCalc.division(1.1, 10)).toEqual(0.11)
	})

	it(`modulo`, () => {
		expect(accurateCalc.modulo(1.1, 0.2)).toEqual(0.1)
	})
})