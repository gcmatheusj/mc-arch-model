import { Payment } from "../src/entities/payment";

export class PaymentRepository {
  public findOne(): Payment {
    return {
      coluna1: 1,
      coluna2: 'bla'
    }
  }
}