Template.projectMain.onCreated(function() {

});

Template.projectMain.onRendered(function() {
});

Template.projectMain.helpers({
    array: function() {
        var projects = []; // 프로젝트명을 저장하는 배열

        // 이메일이 제대로 들어갔는지 테스트
        // alert(SessionStore.get('myEmail'))

        // 현재 사용자가 속한 프로젝트 찾기
        var memberDBs = projectMemberDB.find({member_username: SessionStore.get('myEmail')}).fetch();

        // 찾은 프로젝트 id로 프로젝트들 찾기
        for(var i = 0; i < memberDBs.length; i++) {
            var curProjectId = memberDBs[i].project_id;
            projects.push(projectDB.findOne({_id: curProjectId}));
        }

        return projects;
    }
});

Template.projectMain.events({

});