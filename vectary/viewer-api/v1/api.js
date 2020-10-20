/*!
 * Copyright (c) 2020 by Vectary. All rights reserved.
 * Rev 0d4e5962b0c3f604eefef7a69e1ad668618f36b3
 * @copyright
 */
var Vectary = (function (e) {
  var a = {};
  function t(i) {
    if (a[i]) return a[i].exports;
    var s = (a[i] = { i: i, l: !1, exports: {} });
    return e[i].call(s.exports, s, s.exports, t), (s.l = !0), s.exports;
  }
  return (
    (t.m = e),
    (t.c = a),
    (t.d = function (e, a, i) {
      t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: i });
    }),
    (t.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function (e, a) {
      if ((1 & a && (e = t(e)), 8 & a)) return e;
      if (4 & a && 'object' === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (t.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & a && 'string' != typeof e)
      )
        for (var s in e)
          t.d(
            i,
            s,
            function (a) {
              return e[a];
            }.bind(null, s)
          );
      return i;
    }),
    (t.n = function (e) {
      var a =
        e && e.__esModule
          ? function a() {
              return e['default'];
            }
          : function a() {
              return e;
            };
      return t.d(a, 'a', a), a;
    }),
    (t.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (t.p = '/'),
    t((t.s = './src/viewer-api/scripts/vctr-api.ts'))
  );
})({
  './src/_common_/types.ts': function (e, a, t) {
    'use strict';
    var i;
    t.d(a, 'a', function () {
      return i;
    }),
      (function (e) {
        (e[(e['ERROR'] = 0)] = 'ERROR'),
          (e[(e['READY'] = 1)] = 'READY'),
          (e[(e['GET_OBJECTS'] = 2)] = 'GET_OBJECTS'),
          (e[(e['GET_OBJECT_BY_NAME'] = 3)] = 'GET_OBJECT_BY_NAME'),
          (e[(e['GET_OBJECTS_BY_NAME'] = 4)] = 'GET_OBJECTS_BY_NAME'),
          (e[(e['GET_MESHES'] = 5)] = 'GET_MESHES'),
          (e[(e['GET_MESH_BY_NAME'] = 6)] = 'GET_MESH_BY_NAME'),
          (e[(e['GET_MESHES_BY_NAME'] = 7)] = 'GET_MESHES_BY_NAME'),
          (e[(e['GET_HIT_OBJECTS'] = 8)] = 'GET_HIT_OBJECTS'),
          (e[(e['GET_VISIBILITY'] = 9)] = 'GET_VISIBILITY'),
          (e[(e['SET_VISIBILITY'] = 10)] = 'SET_VISIBILITY'),
          (e[(e['GET_POSITION'] = 11)] = 'GET_POSITION'),
          (e[(e['SET_POSITION_REL'] = 12)] = 'SET_POSITION_REL'),
          (e[(e['SET_POSITION_ABS'] = 13)] = 'SET_POSITION_ABS'),
          (e[(e['GET_ROTATION'] = 14)] = 'GET_ROTATION'),
          (e[(e['SET_ROTATION_REL'] = 15)] = 'SET_ROTATION_REL'),
          (e[(e['SET_ROTATION_ABS'] = 16)] = 'SET_ROTATION_ABS'),
          (e[(e['GET_SCALE'] = 17)] = 'GET_SCALE'),
          (e[(e['SET_SCALE_REL'] = 18)] = 'SET_SCALE_REL'),
          (e[(e['SET_SCALE_ABS'] = 19)] = 'SET_SCALE_ABS'),
          (e[(e['GET_MATERIALS'] = 20)] = 'GET_MATERIALS'),
          (e[(e['SET_MATERIAL'] = 21)] = 'SET_MATERIAL'),
          (e[(e['GET_MATERIALS_BY_NAME'] = 22)] = 'GET_MATERIALS_BY_NAME'),
          (e[(e['GET_MATERIAL_BY_NAME'] = 23)] = 'GET_MATERIAL_BY_NAME'),
          (e[(e['GET_MATERIAL_PROPS'] = 24)] = 'GET_MATERIAL_PROPS'),
          (e[(e['CREATE_MATERIAL'] = 25)] = 'CREATE_MATERIAL'),
          (e[(e['UPDATE_MATERIAL'] = 26)] = 'UPDATE_MATERIAL'),
          (e[(e['GET_BACKGROUND'] = 27)] = 'GET_BACKGROUND'),
          (e[(e['SET_BACKGROUND'] = 28)] = 'SET_BACKGROUND'),
          (e[(e['GET_EXPOSURE'] = 29)] = 'GET_EXPOSURE'),
          (e[(e['SET_EXPOSURE'] = 30)] = 'SET_EXPOSURE'),
          (e[(e['GET_CAMERAS'] = 31)] = 'GET_CAMERAS'),
          (e[(e['GET_CAMERAS_BY_NAME'] = 32)] = 'GET_CAMERAS_BY_NAME'),
          (e[(e['GET_CAMERA_BY_NAME'] = 33)] = 'GET_CAMERA_BY_NAME'),
          (e[(e['SWITCH_VIEW'] = 34)] = 'SWITCH_VIEW'),
          (e[(e['SWITCH_VIEW_ASYNC'] = 35)] = 'SWITCH_VIEW_ASYNC'),
          (e[(e['MOVE_VIEW'] = 36)] = 'MOVE_VIEW'),
          (e[(e['ROTATE_VIEW'] = 37)] = 'ROTATE_VIEW'),
          (e[(e['ZOOM_VIEW'] = 38)] = 'ZOOM_VIEW'),
          (e[(e['GET_FOV'] = 39)] = 'GET_FOV'),
          (e[(e['SET_FOV'] = 40)] = 'SET_FOV'),
          (e[(e['TAKE_SCREENSHOT'] = 41)] = 'TAKE_SCREENSHOT'),
          (e[(e['ENABLE_ANNOTATIONS'] = 42)] = 'ENABLE_ANNOTATIONS'),
          (e[(e['GET_ANNOTATIONS'] = 43)] = 'GET_ANNOTATIONS'),
          (e[(e['GET_ANNOTATION_BY_ID'] = 44)] = 'GET_ANNOTATION_BY_ID'),
          (e[(e['ADD_ANNOTATION'] = 45)] = 'ADD_ANNOTATION'),
          (e[(e['REMOVE_ANNOTATION_BY_ID'] = 46)] = 'REMOVE_ANNOTATION_BY_ID'),
          (e[(e['EXPAND_ANNOTATIONS_BY_ID'] = 47)] =
            'EXPAND_ANNOTATIONS_BY_ID'),
          (e[(e['HIGHLIGHT_MESHES_BY_NAME'] = 48)] =
            'HIGHLIGHT_MESHES_BY_NAME'),
          (e[(e['UNHIGHLIGHT_MESHES_BY_NAME'] = 49)] =
            'UNHIGHLIGHT_MESHES_BY_NAME'),
          (e[(e['GET_VIEW_STATE'] = 50)] = 'GET_VIEW_STATE'),
          (e[(e['APPLY_VIEW_STATE'] = 51)] = 'APPLY_VIEW_STATE'),
          (e[(e['SEND_EVENT'] = 52)] = 'SEND_EVENT'),
          (e[(e['PLAY'] = 53)] = 'PLAY'),
          (e[(e['LOAD'] = 54)] = 'LOAD'),
          (e[(e['SET_UUID_AR'] = 55)] = 'SET_UUID_AR'),
          (e[(e['TRIGGER_AR_CLICK'] = 56)] = 'TRIGGER_AR_CLICK'),
          (e[(e['GET_2D_COORDINATES'] = 57)] = 'GET_2D_COORDINATES'),
          (e[(e['GET_CURRENT_USER'] = 58)] = 'GET_CURRENT_USER'),
          (e[(e['DID_RENDER_LAST_FRAME'] = 59)] = 'DID_RENDER_LAST_FRAME');
      })(i || (i = {}));
  },
  './src/viewer-api/scripts/vctr-api.ts': function (e, a, t) {
    'use strict';
    t.r(a),
      t.d(a, 'VctrApi', function () {
        return n;
      });
    var i = t('./src/_common_/types.ts'),
      s =
        (void 0 && (void 0).__awaiter) ||
        function (e, a, t, i) {
          function s(e) {
            return e instanceof t
              ? e
              : new t(function (a) {
                  a(e);
                });
          }
          return new (t || (t = Promise))(function (t, n) {
            function r(e) {
              try {
                _(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function E(e) {
              try {
                _(i['throw'](e));
              } catch (e) {
                n(e);
              }
            }
            function _(e) {
              e.done ? t(e.value) : s(e.value).then(r, E);
            }
            _((i = i.apply(e, a || [])).next());
          });
        };
    class n {
      constructor(e, a) {
        (this.isReady = !1),
          (this.iframeMsgMap = new Map()),
          (this.id = e),
          (this.globalErrCb = a),
          (n.Utils = new r(this));
      }
      init() {
        return new Promise((e, a) =>
          s(this, void 0, void 0, function* () {
            if (((this.elem = document.getElementById(this.id)), !this.elem)) {
              const t = `Element with id "${this.id}" does not exist`;
              return this.globalErrCb ? this.globalErrCb(t) : a(t), e();
            }
            if (
              ((this.type =
                'IFRAME' === this.elem.nodeName
                  ? 'iframe'
                  : 'VCTR-VIEWER' === this.elem.nodeName
                  ? 'webcomponent'
                  : null),
              !this.type)
            ) {
              const t = `Element with id "${this.id}" is not of an appropriate type`;
              return this.globalErrCb ? this.globalErrCb(t) : a(t), e();
            }
            switch (this.type) {
              case 'iframe':
                this.initIframeMessenger();
              default:
                yield this.getReady(), e();
            }
          })
        );
      }
      getReady() {
        return new Promise((e, a) => {
          const t = this.getRandomNum(),
            s = self.setInterval(() => {
              if ('iframe' === this.type)
                this.iframeMsgMap.set(t, { err: null, succ: null }),
                  this.elem.contentWindow.postMessage(
                    { id: this.id, msgId: t, event: i['a'].READY },
                    '*'
                  );
              else {
                const e = this.elem.isReady();
                e && (this.isReady = !0);
              }
              this.isReady && (self.clearInterval(s), e());
            }, 500);
        });
      }
      getObjects() {
        return this.apiCallInternal(i['a'].GET_OBJECTS);
      }
      getMeshes() {
        return this.apiCallInternal(i['a'].GET_MESHES);
      }
      getObjectsByName(e) {
        return this.apiCallInternal(i['a'].GET_OBJECTS_BY_NAME, { name: e });
      }
      getObjectByName(e) {
        return this.apiCallInternal(i['a'].GET_OBJECT_BY_NAME, { name: e });
      }
      getMeshesByName(e) {
        return this.apiCallInternal(i['a'].GET_MESHES_BY_NAME, { name: e });
      }
      getMeshByName(e) {
        return this.apiCallInternal(i['a'].GET_MESH_BY_NAME, { name: e });
      }
      getHitObjects(e = !1) {
        return this.apiCallInternal(i['a'].GET_HIT_OBJECTS, {
          firstHitOnly: e,
        });
      }
      get2DCoordinates(e) {
        return this.apiCallInternal(i['a'].GET_2D_COORDINATES, { name: e });
      }
      getCameras() {
        return this.apiCallInternal(i['a'].GET_CAMERAS);
      }
      getCamerasByName(e) {
        return this.apiCallInternal(i['a'].GET_CAMERAS_BY_NAME, { name: e });
      }
      getCameraByName(e) {
        return this.apiCallInternal(i['a'].GET_CAMERA_BY_NAME, { name: e });
      }
      switchView(e) {
        return this.apiCallInternal(i['a'].SWITCH_VIEW, { name: e });
      }
      switchViewAsync(e) {
        return this.apiCallInternal(i['a'].SWITCH_VIEW_ASYNC, { name: e });
      }
      moveView(e) {
        return this.apiCallInternal(i['a'].MOVE_VIEW, { position: e });
      }
      rotateView(e) {
        return this.apiCallInternal(i['a'].ROTATE_VIEW, { rotation: e });
      }
      zoomView(e) {
        return this.apiCallInternal(i['a'].ZOOM_VIEW, { zoom: e });
      }
      getVisibility(e) {
        return this.apiCallInternal(i['a'].GET_VISIBILITY, { name: e });
      }
      setVisibility(e, a = !0, t = !1) {
        return this.apiCallInternal(i['a'].SET_VISIBILITY, {
          names: e,
          visible: a,
          isExclusive: t,
        });
      }
      getMaterials() {
        return this.apiCallInternal(i['a'].GET_MATERIALS);
      }
      createMaterial(e, a) {
        return this.apiCallInternal(i['a'].CREATE_MATERIAL, {
          material: e,
          cloneFromMatName: a,
        });
      }
      updateMaterial(e, a, t = !0) {
        return this.apiCallInternal(i['a'].UPDATE_MATERIAL, {
          name: e,
          props: a,
          withPrefetch: t,
        });
      }
      setMaterial(e, a) {
        return this.apiCallInternal(i['a'].SET_MATERIAL, {
          objectName: e,
          materialName: a,
        });
      }
      getMaterialsByName(e) {
        return this.apiCallInternal(i['a'].GET_MATERIALS_BY_NAME, { name: e });
      }
      getMaterialByName(e) {
        return this.apiCallInternal(i['a'].GET_MATERIAL_BY_NAME, { name: e });
      }
      getMaterialProperties(e) {
        return this.apiCallInternal(i['a'].GET_MATERIAL_PROPS, { name: e });
      }
      getBackground() {
        return this.apiCallInternal(i['a'].GET_BACKGROUND);
      }
      setBackground(e) {
        return this.apiCallInternal(i['a'].SET_BACKGROUND, { background: e });
      }
      enableAnnotations(e = !0) {
        return this.apiCallInternal(i['a'].ENABLE_ANNOTATIONS, { enable: e });
      }
      getAnnotations() {
        return this.apiCallInternal(i['a'].GET_ANNOTATIONS);
      }
      getAnnotationById(e) {
        return this.apiCallInternal(i['a'].GET_ANNOTATION_BY_ID, { id: e });
      }
      addAnnotation(e) {
        return this.apiCallInternal(i['a'].ADD_ANNOTATION, {
          annotationConf: e,
        });
      }
      removeAnnotationById(e) {
        return this.apiCallInternal(i['a'].REMOVE_ANNOTATION_BY_ID, { id: e });
      }
      expandAnnotationsById(e, a, t = !0) {
        return this.apiCallInternal(i['a'].EXPAND_ANNOTATIONS_BY_ID, {
          ids: e,
          expand: a,
          isExclusive: t,
        });
      }
      getPosition(e) {
        return this.apiCallInternal(i['a'].GET_POSITION, { name: e });
      }
      setPositionRelative(e, a) {
        return this.apiCallInternal(i['a'].SET_POSITION_REL, {
          name: e,
          position: a,
        });
      }
      setPositionAbsolute(e, a) {
        return this.apiCallInternal(i['a'].SET_POSITION_ABS, {
          name: e,
          position: a,
        });
      }
      getRotation(e) {
        return this.apiCallInternal(i['a'].GET_ROTATION, { name: e });
      }
      setRotationRelative(e, a, t = 'XYZ') {
        return this.apiCallInternal(i['a'].SET_ROTATION_REL, {
          name: e,
          rotation: a,
          order: t,
        });
      }
      setRotationAbsolute(e, a, t = 'XYZ') {
        return this.apiCallInternal(i['a'].SET_ROTATION_ABS, {
          name: e,
          rotation: a,
          order: t,
        });
      }
      getScale(e) {
        return this.apiCallInternal(i['a'].GET_SCALE, { name: e });
      }
      setScaleRelative(e, a) {
        return this.apiCallInternal(i['a'].SET_SCALE_REL, {
          name: e,
          scale: a,
        });
      }
      setScaleAbsolute(e, a) {
        return this.apiCallInternal(i['a'].SET_SCALE_ABS, {
          name: e,
          scale: a,
        });
      }
      highlightMeshesByName(e, a = '#ffff00', t = 1, s = !1) {
        return this.apiCallInternal(i['a'].HIGHLIGHT_MESHES_BY_NAME, {
          names: e,
          color: a,
          intensity: t,
          isExclusive: s,
        });
      }
      unhighlightMeshesByName(e) {
        return this.apiCallInternal(i['a'].UNHIGHLIGHT_MESHES_BY_NAME, {
          names: e,
        });
      }
      takeScreenshot(e = 1, a) {
        return this.apiCallInternal(i['a'].TAKE_SCREENSHOT, {
          scale: e,
          scissor: a,
        });
      }
      getViewState() {
        return this.apiCallInternal(i['a'].GET_VIEW_STATE);
      }
      applyViewState(e) {
        return this.apiCallInternal(i['a'].APPLY_VIEW_STATE, { state: e });
      }
      getExposure() {
        return this.apiCallInternal(i['a'].GET_EXPOSURE);
      }
      setExposure(e) {
        return this.apiCallInternal(i['a'].SET_EXPOSURE, { exposure: e });
      }
      getFOV() {
        return this.apiCallInternal(i['a'].GET_FOV);
      }
      setFOV(e) {
        return this.apiCallInternal(i['a'].SET_FOV, { fov: e });
      }
      sendEvent(e, a, t, s, n) {
        return this.apiCallInternal(i['a'].SEND_EVENT, {
          event: e,
          x: a,
          y: t,
          maxX: s,
          maxY: n,
        });
      }
      play(e, a) {
        return this.apiCallInternal(i['a'].PLAY, { animIdx: e, timeScale: a });
      }
      load() {
        return this.apiCallInternal(i['a'].LOAD);
      }
      setUUIDAr(e) {
        return this.apiCallInternal(i['a'].SET_UUID_AR, { uuid: e });
      }
      triggerARClick() {
        return this.apiCallInternal(i['a'].TRIGGER_AR_CLICK);
      }
      getCurrentUser() {
        return this.apiCallInternal(i['a'].GET_CURRENT_USER);
      }
      didRenderLastFrame() {
        return this.apiCallInternal(i['a'].DID_RENDER_LAST_FRAME);
      }
      apiCallInternal(e, a) {
        return new Promise((t, n) =>
          s(this, void 0, void 0, function* () {
            try {
              if ('iframe' === this.type) {
                const i = this.getRandomNum();
                this.iframeMsgMap.set(i, {
                  err: this.globalErrCb ? this.globalErrCb : n,
                  succ: t,
                }),
                  this.elem.contentWindow.postMessage(
                    {
                      id: this.id,
                      msgId: i,
                      event: e,
                      data: a ? JSON.stringify(a) : void 0,
                    },
                    '*'
                  );
              } else {
                let s;
                switch (e) {
                  case i['a'].GET_OBJECTS:
                    s = this.elem.getObjects();
                    break;
                  case i['a'].GET_MESHES:
                    s = this.elem.getMeshes();
                    break;
                  case i['a'].GET_OBJECTS_BY_NAME:
                    s = this.elem.getObjectsByName(a.name);
                    break;
                  case i['a'].GET_OBJECT_BY_NAME:
                    s = this.elem.getObjectByName(a.name);
                    break;
                  case i['a'].GET_MESHES_BY_NAME:
                    s = this.elem.getMeshesByName(a.name);
                    break;
                  case i['a'].GET_MESH_BY_NAME:
                    s = this.elem.getMeshByName(a.name);
                    break;
                  case i['a'].GET_MATERIALS:
                    s = this.elem.getMaterials();
                    break;
                  case i['a'].CREATE_MATERIAL:
                    s = this.elem.createMaterial(
                      a.material,
                      a.cloneFromMatName
                    );
                    break;
                  case i['a'].UPDATE_MATERIAL:
                    s = this.elem.updateMaterial(
                      a.name,
                      a.props,
                      a.withPrefetch
                    );
                    break;
                  case i['a'].SET_MATERIAL:
                    s = this.elem.setMaterial(a.objectName, a.materialName);
                    break;
                  case i['a'].GET_MATERIALS_BY_NAME:
                    s = this.elem.getMaterialsByName(a.name);
                    break;
                  case i['a'].GET_MATERIAL_BY_NAME:
                    s = this.elem.getMaterialByName(a.name);
                    break;
                  case i['a'].GET_MATERIAL_PROPS:
                    s = this.elem.getMaterialProperties(a.name);
                    break;
                  case i['a'].GET_HIT_OBJECTS:
                    s = this.elem.getHitObjects(a.firstHitOnly);
                    break;
                  case i['a'].GET_2D_COORDINATES:
                    s = this.elem.get2DCoordinates(a.name);
                    break;
                  case i['a'].GET_CAMERAS:
                    s = this.elem.getCameras();
                    break;
                  case i['a'].GET_CAMERAS_BY_NAME:
                    s = this.elem.getCamerasByName(a.name);
                    break;
                  case i['a'].GET_CAMERA_BY_NAME:
                    s = this.elem.getCameraByName(a.name);
                    break;
                  case i['a'].SWITCH_VIEW:
                    s = this.elem.switchView(a.name);
                    break;
                  case i['a'].SWITCH_VIEW_ASYNC:
                    s = this.elem.switchViewAsync(a.name);
                    break;
                  case i['a'].MOVE_VIEW:
                    s = this.elem.moveView(a.position);
                    break;
                  case i['a'].ROTATE_VIEW:
                    s = this.elem.rotateView(a.rotation);
                    break;
                  case i['a'].ZOOM_VIEW:
                    s = this.elem.zoomView(a.zoom);
                    break;
                  case i['a'].GET_VISIBILITY:
                    s = this.elem.getVisibility(a.name);
                    break;
                  case i['a'].SET_VISIBILITY:
                    s = this.elem.setVisibility(
                      a.names,
                      a.visible,
                      a.isExclusive
                    );
                    break;
                  case i['a'].GET_BACKGROUND:
                    s = this.elem.getBackground();
                    break;
                  case i['a'].SET_BACKGROUND:
                    s = yield this.elem.setBackground(a.background);
                    break;
                  case i['a'].ENABLE_ANNOTATIONS:
                    s = yield this.elem.enableAnnotations(a.enable);
                    break;
                  case i['a'].GET_ANNOTATIONS:
                    s = yield this.elem.getAnnotations();
                    break;
                  case i['a'].GET_ANNOTATION_BY_ID:
                    s = yield this.elem.getAnnotationById(a.id);
                    break;
                  case i['a'].ADD_ANNOTATION:
                    s = yield this.elem.addAnnotation(a.annotationConf);
                    break;
                  case i['a'].REMOVE_ANNOTATION_BY_ID:
                    s = yield this.elem.removeAnnotationById(a.id);
                    break;
                  case i['a'].EXPAND_ANNOTATIONS_BY_ID:
                    s = yield this.elem.expandAnnotationsById(
                      a.ids,
                      a.expand,
                      a.isExclusive
                    );
                    break;
                  case i['a'].GET_POSITION:
                    s = this.elem.getPosition(a.name);
                    break;
                  case i['a'].SET_POSITION_REL:
                    s = yield this.elem.setPositionRelative(a.name, a.position);
                    break;
                  case i['a'].SET_POSITION_ABS:
                    s = yield this.elem.setPositionAbsolute(a.name, a.position);
                    break;
                  case i['a'].GET_ROTATION:
                    s = this.elem.getRotation(a.name);
                    break;
                  case i['a'].SET_ROTATION_REL:
                    s = yield this.elem.setRotationRelative(
                      a.name,
                      a.rotation,
                      a.order
                    );
                    break;
                  case i['a'].SET_ROTATION_ABS:
                    s = yield this.elem.setRotationAbsolute(
                      a.name,
                      a.rotation,
                      a.order
                    );
                    break;
                  case i['a'].GET_SCALE:
                    s = this.elem.getScale(a.name);
                    break;
                  case i['a'].SET_SCALE_REL:
                    s = yield this.elem.setScaleRelative(a.name, a.scale);
                    break;
                  case i['a'].SET_SCALE_ABS:
                    s = yield this.elem.setScaleAbsolute(a.name, a.scale);
                    break;
                  case i['a'].HIGHLIGHT_MESHES_BY_NAME:
                    s = yield this.elem.highlightMeshesByName(
                      a.names,
                      a.color,
                      a.intensity,
                      a.isExclusive
                    );
                    break;
                  case i['a'].UNHIGHLIGHT_MESHES_BY_NAME:
                    s = yield this.elem.unhighlightMeshesByName(a.names);
                    break;
                  case i['a'].TAKE_SCREENSHOT:
                    s = yield this.elem.takeScreenshot(a.scale, a.scissor);
                    break;
                  case i['a'].GET_VIEW_STATE:
                    s = yield this.elem.getViewState();
                    break;
                  case i['a'].APPLY_VIEW_STATE:
                    s = yield this.elem.applyViewState(a.state);
                    break;
                  case i['a'].GET_EXPOSURE:
                    s = yield this.elem.getExposure();
                    break;
                  case i['a'].SET_EXPOSURE:
                    s = yield this.elem.setExposure(a.exposure);
                    break;
                  case i['a'].GET_FOV:
                    s = yield this.elem.getFOV();
                    break;
                  case i['a'].SET_FOV:
                    s = yield this.elem.setFOV(a.fov);
                    break;
                  case i['a'].SEND_EVENT:
                    s = yield this.elem.sendEvent(
                      a.event,
                      a.x,
                      a.y,
                      a.maxX,
                      a.maxY
                    );
                    break;
                  case i['a'].PLAY:
                    s = yield this.elem.play(a.animIdx, a.timeScale);
                    break;
                  case i['a'].LOAD:
                    s = yield this.elem.load();
                    break;
                  case i['a'].SET_UUID_AR:
                    s = yield this.elem.setUUIDAr(a.uuid);
                    break;
                  case i['a'].TRIGGER_AR_CLICK:
                    s = yield this.elem.triggerARClick();
                    break;
                  case i['a'].GET_CURRENT_USER:
                    s = this.elem.getCurrentUser();
                    break;
                  case i['a'].DID_RENDER_LAST_FRAME:
                    s = this.elem.didRenderLastFrame();
                    break;
                }
                t(s);
              }
            } catch (e) {
              this.globalErrCb ? this.globalErrCb(e) : n(e), t();
            }
          })
        );
      }
      initIframeMessenger() {
        self.addEventListener('message', (e) => {
          const a = e.data,
            t = this.iframeMsgMap.get(a.msgId);
          if (t) {
            switch (a.event) {
              case i['a'].READY:
                'true' === a.data && (this.isReady = !0);
                break;
              case i['a'].ERROR:
                t.err(a.data);
                break;
              case i['a'].GET_OBJECTS_BY_NAME:
              case i['a'].GET_OBJECT_BY_NAME:
              case i['a'].GET_CAMERAS_BY_NAME:
              case i['a'].GET_CAMERA_BY_NAME:
              case i['a'].GET_MESHES_BY_NAME:
              case i['a'].GET_MESH_BY_NAME:
              case i['a'].GET_MATERIALS_BY_NAME:
              case i['a'].GET_MATERIAL_BY_NAME:
              case i['a'].GET_MATERIAL_PROPS:
              case i['a'].CREATE_MATERIAL:
              case i['a'].UPDATE_MATERIAL:
              case i['a'].GET_VIEW_STATE:
              case i['a'].APPLY_VIEW_STATE:
              case i['a'].GET_ANNOTATIONS:
              case i['a'].GET_ANNOTATION_BY_ID:
              case i['a'].ADD_ANNOTATION:
              case i['a'].GET_CURRENT_USER:
              case i['a'].DID_RENDER_LAST_FRAME:
                try {
                  const e = JSON.parse(a.data);
                  t.succ(e);
                } catch (e) {
                  t.err(e);
                }
                break;
              case i['a'].SET_BACKGROUND:
                t.succ(!0);
                break;
              case i['a'].SWITCH_VIEW:
              case i['a'].MOVE_VIEW:
              case i['a'].ROTATE_VIEW:
              case i['a'].ZOOM_VIEW:
              case i['a'].SET_POSITION_ABS:
              case i['a'].SET_ROTATION_ABS:
              case i['a'].SET_SCALE_ABS:
              case i['a'].SET_POSITION_REL:
              case i['a'].SET_ROTATION_REL:
              case i['a'].SET_SCALE_REL:
              case i['a'].SET_MATERIAL:
              case i['a'].GET_VISIBILITY:
              case i['a'].SET_VISIBILITY:
              case i['a'].ENABLE_ANNOTATIONS:
              case i['a'].REMOVE_ANNOTATION_BY_ID:
              case i['a'].EXPAND_ANNOTATIONS_BY_ID:
              case i['a'].HIGHLIGHT_MESHES_BY_NAME:
              case i['a'].UNHIGHLIGHT_MESHES_BY_NAME:
              case i['a'].SET_EXPOSURE:
              case i['a'].SET_FOV:
              case i['a'].SEND_EVENT:
              case i['a'].PLAY:
              case i['a'].SET_UUID_AR:
              case i['a'].TRIGGER_AR_CLICK:
                'true' === a.data
                  ? t.succ(!0)
                  : t.err('Something went wrong. API call result is false');
                break;
              case i['a'].GET_BACKGROUND:
              case i['a'].GET_POSITION:
              case i['a'].GET_ROTATION:
              case i['a'].GET_SCALE:
              case i['a'].GET_MATERIALS:
              case i['a'].GET_EXPOSURE:
              case i['a'].GET_FOV:
              case i['a'].GET_OBJECTS:
              case i['a'].GET_MESHES:
              case i['a'].GET_HIT_OBJECTS:
              case i['a'].GET_2D_COORDINATES:
              case i['a'].GET_CAMERAS:
                try {
                  const e = JSON.parse(a.data);
                  t.succ(e);
                } catch (e) {
                  t.err(e);
                }
                break;
              case i['a'].TAKE_SCREENSHOT:
              case i['a'].LOAD:
                try {
                  t.succ(a.data);
                } catch (e) {
                  t.err(e);
                }
                break;
              default:
                const e = `Unknown API event "${a.event}"`;
                this.globalErrCb ? this.globalErrCb(e) : void 0;
                break;
            }
            this.iframeMsgMap.delete(a.msgId);
          }
        });
      }
      getRandomNum() {
        const e = new Uint8Array(4);
        return (
          self.crypto.getRandomValues(e), `${e[0]}-${e[1]}-${e[2]}-${e[3]}`
        );
      }
    }
    class r {
      constructor(e) {
        this.api = e;
      }
      animate(e, a, t, i = () => {}) {
        const s = performance.now();
        let n,
          r = 0;
        if ('string' === typeof a)
          switch (a) {
            case 'linear':
              n = this.linear;
              break;
            case 'easeInQuad':
              n = this.easeInQuad;
              break;
            case 'easeOutQuad':
              n = this.easeOutQuad;
              break;
            case 'easeInOutQuad':
              n = this.easeInOutQuad;
              break;
            case 'easeInCubic':
              n = this.easeInCubic;
              break;
            case 'easeOutCubic':
              n = this.easeOutCubic;
              break;
            case 'easeInOutCubic':
              n = this.easeInOutCubic;
              break;
            case 'easeInQuart':
              n = this.easeInQuart;
              break;
            case 'easeOutQuart':
              n = this.easeOutQuart;
              break;
            case 'easeInOutQuart':
              n = this.easeInOutQuart;
              break;
            case 'easeInOutExpo':
              n = this.easeInOutExpo;
              break;
            default:
              n = this.linear;
              break;
          }
        else n = a;
        function E() {
          if (((r = performance.now() - s), r >= e))
            return t(n(1)), i(), void 0;
          let a = r / e;
          const _ = n(a);
          t(_), requestAnimationFrame(E);
        }
        E();
      }
      lerp(e, a, t) {
        let i = e.slice();
        return (
          (i[0] += (a[0] - e[0]) * t),
          (i[1] += (a[1] - e[1]) * t),
          (i[2] += (a[2] - e[2]) * t),
          i
        );
      }
      linear(e) {
        return e;
      }
      easeInQuad(e) {
        return e * e;
      }
      easeOutQuad(e) {
        return e * (2 - e);
      }
      easeInOutQuad(e) {
        return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
      }
      easeInCubic(e) {
        return e * e * e;
      }
      easeOutCubic(e) {
        return --e * e * e + 1;
      }
      easeInOutCubic(e) {
        return e < 0.5
          ? 4 * e * e * e
          : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
      }
      easeInQuart(e) {
        return e * e * e * e;
      }
      easeOutQuart(e) {
        return 1 - --e * e * e * e;
      }
      easeInOutQuart(e) {
        return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
      }
      easeInOutExpo(e) {
        return e < 0.5
          ? Math.pow(2, 20 * e - 10) / 2
          : (2 - Math.pow(2, -20 * e + 10)) / 2;
      }
      fadeOut(e, a) {
        return s(this, void 0, void 0, function* () {
          const t = yield this.api.getMeshByName(e);
          this.animate(
            a,
            this.easeOutQuad,
            (e) => {
              const a = this.lerp([1, 0, 0], [0, 0, 0], e),
                i = { opacity: `${a[0]}` };
              this.api.updateMaterial(t.material, i);
            },
            () => {
              this.api.setVisibility([t.name], !1);
            }
          );
        });
      }
      fadeIn(e, a) {
        return s(this, void 0, void 0, function* () {
          const t = yield this.api.getMeshByName(e);
          this.api.updateMaterial(t.material, { opacity: '0.0' }),
            this.api.setVisibility([t.name], !0),
            this.animate(a, this.easeInQuad, (e) => {
              const a = this.lerp([0, 0, 0], [1, 0, 0], e),
                i = { opacity: `${a[0]}` };
              this.api.updateMaterial(t.material, i);
            });
        });
      }
      moveObjectsIncrementally(e, a, t) {
        return s(this, void 0, void 0, function* () {
          for (let i = 0; i < e.length; i++) {
            const s = e[i],
              n = yield this.api.getPosition(s);
            setTimeout(() => {
              this.animate(t, this.easeOutQuad, (e) => {
                const t = this.lerp(
                  n,
                  [n[0] + a[0], n[1] + a[1], n[2] + a[2]],
                  e
                );
                this.api.setPositionAbsolute(s, t);
              });
            }, i * t);
          }
        });
      }
      swipeObject(e, a, t, i) {
        return s(this, void 0, void 0, function* () {
          const s = yield this.api.getMeshByName(e),
            n = yield this.api.getPosition(s.name);
          'in' === i
            ? (this.fadeIn(s.name, t),
              setTimeout(() => {
                this.animate(t, this.easeOutQuad, (e) => {
                  const t = this.lerp(
                    n,
                    [n[0] + a[0], n[1] + a[1], n[2] + a[2]],
                    e
                  );
                  this.api.setPositionAbsolute(s.name, t);
                });
              }, t / 2))
            : (this.animate(t, this.easeInQuad, (e) => {
                const t = this.lerp(
                  n,
                  [n[0] + a[0], n[1] + a[1], n[2] + a[2]],
                  e
                );
                this.api.setPositionAbsolute(s.name, t);
              }),
              setTimeout(() => {
                this.fadeOut(s.name, t);
              }, t / 2));
        });
      }
      animateRotation(e, a, t) {
        return new Promise((i, n) =>
          s(this, void 0, void 0, function* () {
            try {
              const s = yield this.api.getRotation(e);
              null === s && i(),
                this.animate(
                  t,
                  'linear',
                  (t) => {
                    const i = [
                      s[0] + a[0] * t,
                      s[1] + a[1] * t,
                      s[2] + a[2] * t,
                    ];
                    this.api.setRotationAbsolute(e, i);
                  },
                  () => {
                    this.api.setRotationAbsolute(e, [s[0], s[1], s[2]]), i();
                  }
                );
            } catch (e) {
              n(e);
            }
          })
        );
      }
      getElementVisible(e, a) {
        const t = e.top >= 0 && a - e.top > 0,
          i = e.bottom >= 0 && a - e.bottom > 0;
        if (!t && !i) return [0, 0];
        const s = e.top + e.height / 2,
          n = a - s,
          r = n < 0 || n > a ? 0 : Math.round((s / a) * 100);
        return t && i
          ? [100, r]
          : t
          ? [Math.round(((a - e.top) / e.height) * 100), r]
          : [Math.round(((e.height - -1 * e.top) / e.height) * 100), r];
      }
    }
  },
});
void 0 === Vectary && void 0;
const _Vectary$VctrApi = Vectary['VctrApi'];
export { _Vectary$VctrApi as VctrApi };
