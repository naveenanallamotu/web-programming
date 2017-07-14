var url_yt = 'https://www.googleapis.com/youtube/v3/search/';
var key_1 = 'AIzaSyCoejMFrTxc93iRK2MkuaSwHQHdm2BvqsI';
var previous = '';
var Next_video = '';

function querying(searching, task) {
    var happy = {
        part: 'snippet',
        key: key_1,
        q: searching,
        maxResults: 3,
        type: 'video'
    }

    if (task === 'next') {
        happy.pageToken = Next_video;
    }

    if (task === 'prev') {
        happy.pageToken = previous;
    }

    return happy;
}

function getting(happy, callback) {
    $.getJSON(url_yt, happy, callback);
}


function modelingthedata(video) {

    previous = video.prevPageToken;
    Next_video = video.nextPageToken;

    var currentImage = '';
    var colNumber = 0;
    if (video.items.length !== 0) {
        $('#zero').attr('hidden', true);
        $('#searchadverb').removeAttr('hidden');
        video.items.forEach(function(item, index) {
            currentImage = '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.high.url + '" title="' + item.snippet.title + '"></a><span class="see-more"><a href="https://www.youtube.com/channel/' + item.snippet.channelId + '" title="See more videos by ' + item.snippet.channelTitle + '">More by ' + item.snippet.channelTitle + '</a></span>';
            colNumber = index + 1;
            $('.col-' + colNumber).html(currentImage);

        });
    } else {
        $('#searchadverb').attr('hidden', true);
        $('#zero').removeAttr('hidden');
    }
}

function enteringthesearch() {
    $('#attributedform').submit(function(event) {

        event.preventDefault();
        var searcher = $(this).find('#searchingme').val();
        getting(querying(searcher, 'submit'), modelingthedata);

        $('.pressn').click(function() {
            $('.pressp').removeAttr('disabled');
            getting(querying(searcher, 'next'), modelingthedata);
        });

        $('.pressp').click(function() {
            getting(querying(searcher, 'prev'), modelingthedata);
            if (previous == undefined) {
                $('.pressp').attr('disabled', true);
            }
        });
    });
}

$(function() {
    enteringthesearch();
});
