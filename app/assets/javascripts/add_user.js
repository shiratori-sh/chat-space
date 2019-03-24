$(document).on('turbolinks:load', function(){
  var user_list = $("#user-search-result");

  function appendUsers(user) {
    var html =`
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">
      ${user.name}
      </p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id} " data-user-name=" ${user.name }">追加
      </a>
    </div>`
      user_list.append(html);
  }

  function appendUsersErrorHTML(){
    var html =`
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ "一致するユーザーは見つかりません" }
      </p>
    </div>`
    user_list.append(html)
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
      if (input.length != 0){
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input },
          dataType: 'json'
        })

        .done(function(users) {
          $("#user-search-result").empty();
            if (users.length !== 0) {
              users.forEach(function(user){
                appendUsers(user);
              })
            }
            else{
              appendUsersErrorHTML()
            }
          })
        .fail(function() {
         alert('ユーザー検索に失敗しました');
        });
    }
      else{
        $("#user-search-result").empty()
      }
  });
  var group_member = $("#chat-group-users");
  function appendRemoveUser(member, member_id) {
    var html = `
    <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value='${ member_id }'>
        <p class='chat-group-user__name'>${ member }</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id="${ member_id }" data-user-name="${ member }">削除</a>
    </div>`
    group_member.append(html);
  }

  $('#user-search-result').on('click', '.user-search-add', function() {
    $(this).parent().empty();
    var member = $(this).attr("data-user-name");
    var member_id = $(this).attr("data-user-id");
    appendRemoveUser(member, member_id)
  });

  $('#chat-group-users').on('click', '.user-search-remove', function(){
    var member_name = {user_id: $(this).attr('data-user-id'), name: $(this).attr('data-user-name')};
    $(this).parent().empty();
    appendUsers(member_name)
    $("#user-search-result").empty()
  });
});
