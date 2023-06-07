// Single Responsibility Principle
// Принцип единственной ответственности
class HttpClient {

    get(url: string) {

    }

    put() {
    }

    post() {
    }

    delete() {
    }
}

class UserService {
    client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    getOneUser(id: number) {

    }

    getAllUser() {
    }
}

class RequisitesService {
    createRequisites() {
    }

    getRequisites() {
    }

    updateRequisites() {
    }
}