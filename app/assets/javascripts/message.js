$(function() {
  function messageHTML(message){

    var word = ( message.content !== null ) ? `<p class ="message__content__text"> ${message.content} </p>` : "";

    var image = ( message.imageurl !== null ) ? `<img src = ${message.imageurl} class="message__content__image">` : "";

    var html = `
<div class="message">
  <div class="message__info">
    <div class="message__taker">
      ${message.name}
    </div>
    <div class="message__info__time">
      ${message.time}
    </div>
  </div>
  <div class="message__content">
    ${word}
    ${image}
  </p>
</div>
`
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this)
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message_data){
      var html = messageHTML(message_data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('メッセージを入力してください。')
    })
      $('#new_message')[0].reset();
  })
})
