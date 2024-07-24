const base = {
    get() {
        return {
            url : "http://localhost:8080/assistingfarmers/",
            name: "assistingfarmers",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/assistingfarmers/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "助农平台"
        }
    }
}
export default base
