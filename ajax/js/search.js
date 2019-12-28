$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url : 'data/search.json',
    dataType:'text',
    success :function(data){
      var searchVar = eval("("+data+")");
      var searchTag = '';

      searchTag += '<select name="car1" id="cate1">';
      for(var i in searchVar){
        searchTag += '<option value="'+searchVar[i]['cate1Val']+'">'+searchVar[i]['cate1']+'</option>';
      }
      searchTag += '</select>';
      searchTag += '<div id="car"></div>';

      $('#searchWrap').html(searchTag);
      $('#searchWrap select').on('change', function(){ // 동적 객체 이벤트 연결
        var _thisVal = $(this).val(); // 선택된 option value 값이 저장
        var _dataIndex = $("option[value="+_thisVal+"]",this).index();
        var _cate2Tag = '';

        for(var cn in searchVar[_dataIndex]['cate2']){
          _cate2Tag +="<p>" + searchVar[_dataIndex]['cate2'][cn]+"</p>";
        }
        $("#car").html(_cate2Tag);
      });
    },
    error: function(data, status, error){
      alert("code: "+data.status+"\n"+"message: "+data.response);
    },
  });
});
