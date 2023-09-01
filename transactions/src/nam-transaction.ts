import { PaymentRepository } from '../../data/src/repositories/payment-repository'
import { FondeoRepository } from '../../data/src/repositories/fondeo-repository'

const paymentRepo = new PaymentRepository()
const fondeoRepo = new FondeoRepository()

export class NamTransaction {
  public dataFromPaymentAndFondeo() {
    const payment = paymentRepo.findOne()

    const fondeo = fondeoRepo.findOne()
  }
}

const namTransaction = new NamTransaction()

namTransaction.dataFromPaymentAndFondeo()