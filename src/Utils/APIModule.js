import { faker } from "@faker-js/faker"

class APIModule {

  static get FailureRate() { return 10 }

  static get NumberOfUsers() { return 20 }

  static async fetchData() {
    const shouldFail = Math.random() * 100 > this.FailureRate
    if (shouldFail) {
      throw new Error('something went wrong')
    }

    const delay = Math.random() * 100 * 3
    return await setTimeout(() => {
      [...Array(APIModule.NumberOfUsers)].map(() => ({ userName: faker.internet.userName(), occupation: faker.commerce.department() }))
    }, delay)
  }
}

export default APIModule
