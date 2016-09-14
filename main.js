$(document).ready(init)
 var studentArr=[];
 var $randList="";

  function init(){
    
    $('#add').click(addButtonClicked);
    $("#pick").click(pickRandomStudent);
    $("#randGroup").click(pickGroup);
  }

function addButtonClicked(){
  console.log('clicked');
  var $input = $("#text");
  var name = $input.val();
  var color = $('#color').val();
  console.log('color:', color)
  $input.val('');
  studentArr = name.split(",");
  console.log('studArr:',studentArr);
  var $list =$('#list');
  for(var i=0; i< studentArr.length ; ++i){
     var $li =$('<li>');
     $li.text(studentArr[i]).css('color',color);
     $list.append($li);
  }
/*
  var $li =$('<li>');
  arr.push(name);
  console.log('arr:', arr)
  $li.text(name).css('color',color);

  var $list =$('#list');
  $list.append($li);*/
}

function pickRandomStudent(){
  $randList =$('#pickRand');
  $randList.text('');
  console.log('clicked random student')
  console.log('arr of students:', studentArr)
  var randStudent = studentArr[Math.floor(Math.random() * studentArr.length)];
  console.log('randStudent:', randStudent)
  var $randli =$('<li>'); 
  $randli.text(randStudent);
  $randList.append($randli);
}

function pickGroup(){
  var $count = $("#grpPick");
  var groupOf= Number($count.val());
  console.log('pick the group of :',groupOf );
  var groupListCount = Math.floor(studentArr.length/groupOf);
  console.log('groupListCount:', groupListCount);
   if(groupListCount === groupOf) {
    var $pickGroups= $('#pickGroups');
    array = studentArr;
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      console.log('random array',array);
         for(var i =0,j=0 ; i<groupListCount; i++,j=j+groupOf) {
           var $newArr_i = array.slice(j,j+groupOf)
           console.log("new_arr" + i ,$newArr_i);
            var $head = $('<h3>')
            $pickGroups.append($head)
            $head.text('Group'+(i+1))
              for(var z=0; z< $newArr_i.length ; ++z){
                   var $grpli =$('<li>');
                   $grpli.text($newArr_i[z]);
                   $pickGroups.append($grpli);
              }
     }
  }
  else {
    var $pickGroups= $('#pickGroups');
    array = studentArr;
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      console.log('random array',array);
         for(var i =0,j=0 ; i<=groupListCount; i++,j=j+groupOf) {
           var $newArr_i = array.slice(j,j+groupOf)
           console.log("new_arr" + i ,$newArr_i);
            var $head = $('<h3>')
            $pickGroups.append($head)
            $head.text('Group'+(i+1))
              for(var z=0; z< $newArr_i.length ; ++z){
                   var $grpli =$('<li>');
                   $grpli.text($newArr_i[z]);
                   $pickGroups.append($grpli);
              }
     }
  }
}

