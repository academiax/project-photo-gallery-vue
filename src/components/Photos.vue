<template>

  <div>
    <h1>{{this.$route.params.codeId}}</h1>

    <!--<div class="col-xs-12 col-sm-12 thumb">
    <h3 class="text-center">{{images[params.codeId][0]}}
    {{galleries[params.galleryId].suffix}}</h3>
</div>

<div class="col-xs-{{gallery[$index]}} col-sm-4 thumb" ng-repeat="image in images[params.codeId][1] track by $index">
    <a class="thumbnail" show-modal index="{{$index}}" ng-click="updateimage($index+1)">
        &lt;!&ndash; index + 1 because images are named starting in 1 &ndash;&gt;
        <img class="img-responsive img" ng-src="img/thumb/{{params.codeId}}/{{$index + 1}}.jpg" alt="">
    </a>

    &lt;!&ndash; Name of picture &ndash;&gt;
    <span class="hidden-xs">{{images[params.codeId][1][$index]}}</span>
</div>
<div id="spacer"></div>

&lt;!&ndash; Large modal &ndash;&gt;
<div class="modal fade image-modal" tabindex="-1" role="dialog" aria-labelledby="Images">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div ng-include src="'views/full.html'"></div>
        </div>
    </div>
</div>-->


  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'Photos',
  data() {
    return {
      name: 'Photos'

    }
  }
}
</script>
