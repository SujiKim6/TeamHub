Template.addProject.helpers({

    isPublic: function() {
        return Session.get('isPublic')
    }
});

Session.set('isPublic',true);

Template.addProject.events({
    'click #public': function (evt, tmpl) {
        todoDB.update({_id: this._id},{
            $set: {
                isPublic: true
            }
        });
        Session.set('isPublic',true)
    },

    'click #private': function (evt, tmpl) {
        todoDB.update({_id: this._id},{
            $set: {
                isPublic: false
            }
        });
        Session.set('isPublic',false)
    },

    'click #addProjectPlusBtn': function (evt, tmpl) {
        var todo_list = $('#todoInput').val();

        //할일을 할일DB에 추가한다.
        todoDB.insert({
            createdAt: new Date(),
            project_id: this._id,
            content: todo_list
        });
    },

    //addProject의 확인 버튼
    'click #confirmBtn': function(evt, tmpl) {
        var project_name =  $('#projectName').val();
        var project_goal =  $('#projectGoal').val();
        var startDate =  $('#inpStartDate').val();
        var endDate =  $('#inpEndDate').val();

        // 빈칸을 모두 채우지 않을 경우 에러메세지 띄우고 돌아가기
        if((project_name === "" )||(project_goal ==="")||(startDate==="") ||(endDate==="") )
        {
            //error 메세지 띄우기
            alert("모든 정보를 입력하세요.");
            return;
        }

        // 이메일이 제대로 들어갔는지 테스트
        // alert(SessionStore.get('myEmail'))

        // 빈칸을 모두 채웠을 경우 DB에 추가하기
        var project_id = projectDB.insert({
            createdAt: new Date(),
            name: project_name,
            goal: project_goal,
            startAt: startDate,
            endAt: endDate,
            manager_username: SessionStore.get('myEmail'),
            isPublic: true
        });

        projectMemberDB.insert({
            createdAt: new Date(),
            project_id: project_id,
            member_username: SessionStore.get('myEmail'),
            isAccepted: false
        });

    }
})