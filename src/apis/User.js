import Api from "./Api";
import Csrf from "./Csrf";

export default {
    async register(form) {
        await Csrf.getCookie();

        return Api.post("/register", form);
    },

    async login(form) {
        await Csrf.getCookie();

        return Api.post("/login", form);
    },

    async logout() {
        await Csrf.getCookie();

        return Api.post("/logout");
    },

    getCustomers() {
        return Api.get("/customers");
    },

    storeCustomer(form) {
        return Api.post("/customers", form);
    },

    destroyCustomer(id) {
        return Api.delete(`/customers/${id}`);
    },

    getCustomer(id) {
        return Api.get(`/customers/${id}`);
    },

    editCustomer(id, form) {
        return Api.put(`/customers/${id}`, form);
    },

    storeNumber(id, form) {
        return Api.post(`/customers/${id}/numbers`, form);
    },

    getNumbers(id) {
        return Api.get(`/customers/${id}/numbers`);
    },

    destroyNumber(id, numberId) {
        return Api.delete(`customers/${id}/numbers/${numberId}`);
    },

    getNumber(id, numberId) {
        return Api.get(`customers/${id}/numbers/${numberId}`);
    },

    editNumber(id, numberId, form) {
        return Api.put(`customers/${id}/numbers/${numberId}`, form);
    },

    getNumberPreferences(id, numberId) {
        return Api.get(`customers/${id}/numbers/${numberId}/number-preferences`);
    },

    destroyNumberPreference(id, numberId, numberPreferenceId) {
        return Api.delete(`customers/${id}/numbers/${numberId}/number-preferences/${numberPreferenceId}`);
    },

    storeNumberPreference(id, numberId, form) {
        return Api.post(`customers/${id}/numbers/${numberId}/number-preferences`, form);
    },

    editNumberPreference(id, numberId, numberPreferenceId, form) {
        return Api.put(`customers/${id}/numbers/${numberId}/number-preferences/${numberPreferenceId}`, form);
    }
};
