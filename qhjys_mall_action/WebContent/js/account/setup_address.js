var optype;$(function(){$.ajax({async:false,type:"POST",url:"/queryProvinceInfo.do",success:function(a){$("#province").combobox({data:a.provinceList,valueField:"id",textField:"name",editable:false,onChange:function(b){var c=b;$.ajax({async:false,type:"POST",data:{provinceId:c},url:"/queryCityInfo.do",success:function(d){$("#cityId").combobox({data:d.cityInfoList,valueField:"id",textField:"name",editable:false,onChange:function(e){var f=e;$.ajax({async:false,type:"POST",data:{cityId:f},url:"/queryDistrictInfo.do",success:function(g){$("#area").combobox({data:g.districtInfoList,valueField:"id",textField:"name",editable:false})}})}})}})}})}});$("#address").blur(function(){validate(this,"请输入街道地址",50)});$("#zip").blur(function(){$("#zip").next().remove();var c=/^[0-9]{6}$/;var b=$("#zip").val().trim();if(b==""){var a=$('<label class="one1" style="width:180px;">请输入邮政编码</label>');$("#zip").after(a)}else{if(!(c.test(b))){var a=$('<label class="one1" style="width:180px;">请输入正确的邮政编码</label>');$("#zip").after(a)}}});$("#recipient").blur(function(){validate(this,"请输入收件人",50)});$("#phone").blur(function(){$("#phone").next().remove();var b=$('<label class="one1" style="width:180px;">请输入手机号码</label>');var c=$("#phone").val().trim();var a=/^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;if(c==""){$("#phone").after(b)}else{if(!a.test($("#phone").val())){str="请输入正确的手机号";b=$('<label class="one1" style="width:180px;">'+str+"</label>");$("#phone").after(b)}}});$("#setupAddressForm").submit(function(){$("#setupAddressForm label[class=one1]").remove();if($("#area").combobox("getValue").trim()==""){var b=$('<label class="one1" style="width:180px;">请选择所在地区</label>');$("#area").after(b)}validate("#address","请输入街道地址",50);validate("#recipient","请输入收货人",50);var d=/^[0-9]{6}$/;var c=$("#zip").val().trim();if(c==""){var b=$('<label class="one1" style="width:180px;">请输入邮政编码</label>');$("#zip").after(b)}else{if(!(d.test(c))){var b=$('<label class="one1" style="width:180px;">请输入正确的邮政编码</label>');$("#zip").after(b)}}var a=/^(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;if($("#phone").val().trim()==""){var b=$('<label class="one1" style="width:180px;">请输入手机号码</label>');$("#phone").after(b)}else{if(!a.test($("#phone").val())){var e="请输入正确的手机号";var b=$('<label class="one1" style="width:180px;">'+e+"</label>");$("#phone").after(b)}}if($("#setupAddressForm label[class=one1]").length>0){return false}if($("#id").val()!=""){optype="1"}else{optype="2"}$.ajax({async:false,type:"POST",url:optype=="2"?"/managermall/account/insertAddress.do":"/managermall/account/updateAddress.do",data:$(this).serialize(),success:function(f){if(f.message=="添加成功"){alert("添加收货地址成功");$("input[id=id]").val("");window.location.href="/managermall/account/queryAddressList.do"}else{if(f.message=="修改成功"){alert("修改收货地址成功");$("input[id=id]").val("");window.location.href="/managermall/account/queryAddressList.do"}else{alert("编辑收货地址失败")}}},error:function(f){alert("error");return false}});return false})});function update(a){$("div[id=setAddress]").show();$("#id").val(a);var a=$("#id").val();$.ajax({async:false,type:"POST",url:"/managermall/account/searchAddressById.do",data:{id:a},success:function(b){$("#province").combobox("setValue",b.address.province);$("#cityId").combobox("setValue",b.address.city);$("#area").combobox("setValue",b.address.area);$("#zip").val(b.address.zip);$("#address").val(b.address.address);$("#recipient").val(b.address.recipient);$("#phone").val(b.address.phone)},error:function(b){alert("error");return false}})}function closeWindow(){$("input[id=id]").val("");$("label[class=one1]").remove();$("#setupAddressForm")[0].reset();$("div[id=setAddress]").hide()}function del(a){$("#id").val(a);var a=$("#id").val();$.ajax({async:false,type:"POST",url:"/managermall/account/deleteAddress.do",data:{id:a},success:function(b){if(b.message=="删除成功"){alert("删除收货地址成功");window.location.href="/managermall/account/queryAddressList.do"}else{alert("删除收货地址失败")}},error:function(b){alert("error");return false}})}function setupAddress(){$("div[id=setAddress]").show()}function validate(b,e,c){$(b).next().remove();var a=$('<label class="one1" style="width:180px;">'+e+"</label>");var d=$(b).val().trim();if(d==""){$(b).after(a)}else{if($(b).val().length>c){e="长度不能大于"+c+"位！";a=$('<label class="one1" style="width:180px;">'+e+"</label>");$(b).after(a)}}};