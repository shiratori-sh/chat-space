json.content      @message.content
json.imageurl     @message.image.url
json.name         @message.user.name
json.time         @message.created_at.strftime("%Y/%m/%d %H:%M")
json.id           @message.id
