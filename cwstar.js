$('body').on('click', '._starAction', function(){   
    var reroom_id = 12494873;

    //対象のメッセージデータをセット
    var message_id = $(this).attr('data-cwui-ab-id');
    
    //チャットオブジェクト取得
    var chat_dat = RM.timeline.chat_id2chat_dat[message_id];
    
    var quoted_msg = '[qt][qtmeta aid=' + chat_dat.aid + ' time=' + chat_dat.tm + ']' + chat_dat.msg + '[/qt]\nhttps://www.chatwork.com/#!rid'+RM.id+'-'+message_id;
    CS.sendMessage(reroom_id, CS.convertToSend(quoted_msg));
});

$('#_chatContent').on('click','._cwABMoreTip', function(){
 var message_id = $(this).attr('data-cwui-ab-id');
 $('._cwABMoreListBox').append('<li class="_starAction chatActionMore" data-cwui-ab-id="'+ message_id +'" data-cwui-ab-type="star">☆<span class="chatActiontext">☆</span></li>');
});