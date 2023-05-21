import { faker } from "@faker-js/faker"

class APIModule {

  static get FailureRate() { return 10 }

  static get NumberOfUsers() { return 20 }



  /**
   * The SDK Method to fetch the data, it has a failure rate of 10 percent and a random delay, otherwise it will return an array of objects
   * each object has the userName and occupation key
   *
   * @static
   * @return {*}
   * @memberof APIModule
   */
  static async fetchData() {
    const shouldFail = Math.random() * 100 < this.FailureRate
    if (shouldFail) {
      throw new Error('something went wrong')
    }

    const data = [...Array(APIModule.NumberOfUsers)].map(() => ({ userName: faker.internet.userName(), occupation: faker.commerce.department() }))
    const delay = Math.random() * 1000 * 5

    /// Mocked Network delay
    await new Promise(resolve => setTimeout(resolve, delay));

    return { data }
  }
}

export default APIModule
