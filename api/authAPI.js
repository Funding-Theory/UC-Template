export default class AuthManager {
    constructor($http, BASEURL) {
        this.$http = $http
        this.LOGINAPI = `${BASEURL}/requestCompany/loginCompanyUser`
        this.REQUESTCOMPANY = `${BASEURL}/requestCompany/getRequestCompany`
        this.REGISTERCOMPANY = `${BASEURL}/requestCompany/addRequestCompany`
        this.CREATEPASSWORD = `${BASEURL}/companyUser/setPasswordOfCompanyUser`
        this.UPDATEREGISTERCOMPANY = `${BASEURL}/requestCompany/updateCompanyRegistration`
        this.REQUESTCOMPANYHISTORY = `${BASEURL}/requestCompany/getCompanyRegistrationHistory`
    }

    login(data) {
        return this.$http.post(this.LOGINAPI, data)
        // return this.$http.put(this.LOGINAPI, data)
        // return this.$http.get(this.LOGINAPI, data)
        // return this.$http.post(this.LOGINAPI, {}, { params: data })
    }
}
