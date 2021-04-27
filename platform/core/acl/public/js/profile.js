(()=>{var t={3829:()=>{function t(t,a){for(var i=0;i<a.length;i++){var r=a[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function a(t){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),this.$container=t,this.$avatarView=this.$container.find(".avatar-view"),this.$triggerButton=this.$avatarView.find(".mt-overlay .btn-outline"),this.$avatar=this.$avatarView.find("img"),this.$avatarModal=this.$container.find("#avatar-modal"),this.$loading=this.$container.find(".loading"),this.$avatarForm=this.$avatarModal.find(".avatar-form"),this.$avatarSrc=this.$avatarForm.find(".avatar-src"),this.$avatarData=this.$avatarForm.find(".avatar-data"),this.$avatarInput=this.$avatarForm.find(".avatar-input"),this.$avatarSave=this.$avatarForm.find(".avatar-save"),this.$avatarWrapper=this.$avatarModal.find(".avatar-wrapper"),this.$avatarPreview=this.$avatarModal.find(".avatar-preview"),this.support={fileList:!!$('<input type="file">').prop("files"),fileReader:!!window.FileReader,formData:!!window.FormData}}var i,r,e;return i=a,e=[{key:"isImageFile",value:function(t){return t.type?/^image\/\w+$/.test(t.type):/\.(jpg|jpeg|png|gif)$/.test(t)}},{key:"submitFail",value:function(t){Botble.handleError(t)}}],(r=[{key:"init",value:function(){this.support.datauri=this.support.fileList&&this.support.fileReader,this.support.formData||this.initIframe(),this.initTooltip(),this.initModal(),this.addListener()}},{key:"addListener",value:function(){this.$triggerButton.on("click",$.proxy(this.click,this)),this.$avatarInput.on("change",$.proxy(this.change,this)),this.$avatarForm.on("submit",$.proxy(this.submit,this))}},{key:"initTooltip",value:function(){this.$avatarView.tooltip({placement:"bottom"})}},{key:"initModal",value:function(){this.$avatarModal.modal("hide"),this.initPreview()}},{key:"initPreview",value:function(){var t=this.$avatar.prop("src");this.$avatarPreview.empty().html('<img src="'+t+'">')}},{key:"initIframe",value:function(){var t="avatar-iframe-"+Math.random().toString().replace(".",""),a=$('<iframe name="'+t+'" style="display:none;"></iframe>'),i=!0,r=this;this.$iframe=a,this.$avatarForm.attr("target",t).after(a),this.$iframe.on("load",(function(){var t,a,e;try{a=this.contentWindow,t=(e=(e=this.contentDocument)||a.document)?e.body.innerText:null}catch(t){}t?r.submitDone(t):i?i=!1:r.submitFail("Image upload failed!"),r.submitEnd()}))}},{key:"click",value:function(){this.$avatarModal.modal("show")}},{key:"change",value:function(){var t,i;this.support.datauri?(t=this.$avatarInput.prop("files")).length>0&&(i=t[0],a.isImageFile(i)&&this.read(i)):(i=this.$avatarInput.val(),a.isImageFile(i)&&this.syncUpload())}},{key:"submit",value:function(){return this.$avatarSrc.val()||this.$avatarInput.val()?this.support.formData?(this.ajaxUpload(),!1):void 0:(Botble.showError("Please select image!"),!1)}},{key:"read",value:function(t){var a=this,i=new FileReader;i.readAsDataURL(t),i.onload=function(){a.url=this.result,a.startCropper()}}},{key:"startCropper",value:function(){var t=this;this.active?this.$img.cropper("replace",this.url):(this.$img=$('<img src="'+this.url+'">'),this.$avatarWrapper.empty().html(this.$img),this.$img.cropper({aspectRatio:1,rotatable:!0,preview:this.$avatarPreview.selector,done:function(a){var i=['{"x":'+a.x,'"y":'+a.y,'"height":'+a.height,'"width":'+a.width+"}"].join();t.$avatarData.val(i)}}),this.active=!0)}},{key:"stopCropper",value:function(){this.active&&(this.$img.cropper("destroy"),this.$img.remove(),this.active=!1)}},{key:"ajaxUpload",value:function(){var t=this.$avatarForm.attr("action"),a=new FormData(this.$avatarForm[0]),i=this;$.ajax(t,{type:"POST",data:a,processData:!1,contentType:!1,beforeSend:function(){i.submitStart()},success:function(t){i.submitDone(t)},error:function(t,a,r){i.submitFail(t.responseJSON,a||r)},complete:function(){i.submitEnd()}})}},{key:"syncUpload",value:function(){this.$avatarSave.trigger("click")}},{key:"submitStart",value:function(){this.$loading.fadeIn(),this.$avatarSave.attr("disabled",!0).text("Saving...")}},{key:"submitDone",value:function(t){try{t=$.parseJSON(t)}catch(t){}t&&!t.error&&t.data?(this.url=t.data.url,this.support.datauri||this.uploaded?(this.uploaded=!1,this.cropDone()):(this.uploaded=!0,this.$avatarSrc.val(this.url),this.startCropper()),this.$avatarInput.val(""),Botble.showSuccess(t.message)):Botble.showError(t.message)}},{key:"submitEnd",value:function(){this.$loading.fadeOut(),this.$avatarSave.removeAttr("disabled").text("Save")}},{key:"cropDone",value:function(){this.$avatarSrc.val(""),this.$avatarData.val(""),this.$avatar.prop("src",this.url),$(".user-menu img").prop("src",this.url),$(".user.dropdown img").prop("src",this.url),this.stopCropper(),this.initModal()}}])&&t(i.prototype,r),e&&t(i,e),a}();$(document).ready((function(){new a($(".crop-avatar")).init()}))},1659:()=>{},931:()=>{},8666:()=>{},7239:()=>{},3219:()=>{},3168:()=>{},2420:()=>{},7131:()=>{},846:()=>{},9636:()=>{},4208:()=>{},997:()=>{},7810:()=>{},2434:()=>{},9750:()=>{},9263:()=>{},3584:()=>{},6451:()=>{},3292:()=>{},763:()=>{},313:()=>{},9710:()=>{},6586:()=>{},9857:()=>{},7736:()=>{},3238:()=>{},2765:()=>{},9040:()=>{},5737:()=>{},2936:()=>{},2769:()=>{},7889:()=>{},5861:()=>{},4727:()=>{},933:()=>{},2428:()=>{},2469:()=>{},9132:()=>{},1151:()=>{},1935:()=>{},2764:()=>{},8886:()=>{}},a={};function i(r){if(a[r])return a[r].exports;var e=a[r]={exports:{}};return t[r](e,e.exports,i),e.exports}i.m=t,i.x=t=>{},i.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),(()=>{var t={6519:0},a=[[3829],[1151],[1935],[2764],[8886],[1659],[931],[8666],[7239],[3219],[3168],[2420],[7131],[846],[9636],[4208],[997],[7810],[2434],[9750],[9263],[3584],[6451],[3292],[763],[313],[9710],[6586],[9857],[7736],[3238],[2765],[9040],[5737],[2936],[2769],[7889],[5861],[4727],[933],[2428],[2469],[9132]],r=t=>{},e=(e,n)=>{for(var s,o,[h,l,u,v]=n,p=0,c=[];p<h.length;p++)o=h[p],i.o(t,o)&&t[o]&&c.push(t[o][0]),t[o]=0;for(s in l)i.o(l,s)&&(i.m[s]=l[s]);for(u&&u(i),e&&e(n);c.length;)c.shift()();return v&&a.push.apply(a,v),r()},n=self.webpackChunk=self.webpackChunk||[];function s(){for(var r,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var h=n[o];0!==t[h]&&(s=!1)}s&&(a.splice(e--,1),r=i(i.s=n[0]))}return 0===a.length&&(i.x(),i.x=t=>{}),r}n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n));var o=i.x;i.x=()=>(i.x=o||(t=>{}),(r=s)())})(),i.x()})();
