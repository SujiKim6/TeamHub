var tmp;

Template.proMembers.helpers({
    //기존 존재하는 멤버 목록들을 보여준다.
    array: function() {
        return userDB.find({}).fetch();
    }
});

//버튼 기능들 구현
Template.proMembers.events({

    //회원 삭제
    'click #iconDelete': function(evt, tmpl) {
        if(confirm('정말 삭제하시겠습니까?')) {
            userDB.remove({_id: this._id});
        };
    },

    //tab의 회원초대 버튼
    /*'click #invite': function (evt, tmpl) {
        //팀허브에 등록이 되어있으면, 해당 유저에게 앱 내 초대 메시지 보냄
        if() {

        }
        //등록이 안되어있다면 가입 이메일을 전송
        else if () {

        }
    }*/

    //추방, 위임 버튼
});