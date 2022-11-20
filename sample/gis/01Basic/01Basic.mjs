import * as THREE from '../../../node_modules/three/build/three.module.js';

/** @link { https://www.youtube.com/watch?v=vjKuk5Vp93k } */
class App {

    /** @type { HTMLDivElement } */
    _divContainer;

    /** @type { WebGLRenderer } */
    _renderer;

    /** @type { Scene } */
    _scene;

    /** @type { PerspectiveCamera } */
    _camera;

    /** @type { Object3D } */
    _cube;

    constructor() {

        this._divContainer = document.querySelector( `#webgl-container` );

        /**
         * - WebGLRenderer 의 antialias 를 true 로 하게 되면,
         *   3차원 장면이 렌더링 될때, Object 들의 경계선이 계단현상없이 부드럽게 출력된다
         */
        this._renderer = new THREE.WebGLRenderer( { antialias : true } );

        /**
         * - PixelRatio -> window 의 devicePixelRatio 로 현재 모니터의 pixelRatio 설정
         */
        this._renderer.setPixelRatio( window.devicePixelRatio );

        /**
         * this._renderer.domElement : canvas DOM 객체
         */
        this._divContainer.appendChild( this._renderer.domElement );

        this._scene = new THREE.Scene();

        this._setupCamera();

        this._setupLight();

        this._setupModel();

        /** resize 일어날경우 실행할 콜백함수설정 */
        window.onresize = this.resize.bind( this );

        /** 강제로 첫 실행시 맞춰서 설정 */
        this.resize();

        requestAnimationFrame( this.render.bind( this ) );

    }

    /**
     * - 실제 3차원 그래픽을 만들어주는 메서드
     *
     * @param { number } time - 렌더링 처음 시작 후 경과된 값( 단위 : 밀리초 )
     *
     * @return { void }
     *
     * @public
     */
    render( time ){

        /** _scene 을 _camera 를 통해 rendering 하는 것 */
        this._renderer.render( this._scene , this._camera );

        /** 속성 값을 통해 애니메이션을 업데이트 */
        this.update( time );

        /** 다음 RePaint 가 일어나기전에 실행할 함수를 콜백으로 전달 */
        requestAnimationFrame( this.render.bind( this ) );
    }

    /**
     * - 해당 객체 모델( 파란 정육면체 ) 애니메이션을 시간값에 따라 업데이트
     *
     * @param { number } time - 렌더링 처음 시작 후 경과된 값( 단위 : 밀리초 )
     *
     * @return { void }
     *
     * @public
     */
    update( time ){

        /** second unit : 밀리 세컨드를 세컨드 단위로 변경 */
        const _time = time * 0.001;

        this._cube.rotation.x = _time;

        this._cube.rotation.y = _time;

    }

    /**
     *
     * - window resize event
     *
     * @return { void }
     *
     * @public
     */
    resize(){

        const width = this._divContainer.clientWidth;

        const height = this._divContainer.clientHeight;

        this._camera.aspect = ( width / height );

        this._camera.updateProjectionMatrix();

        this._renderer.setSize( width , height );

    }

    /**
     * - 카메라 설정
     *
     * @return { void }
     * @private
     */
    _setupCamera(){

        const width = this._divContainer.clientWidth;

        const height = this._divContainer.clientHeight;

        this._camera = new THREE.PerspectiveCamera(
            75,
            ( width / height ),
            0.1,
            100
        );

        this._camera.position.z = 2;

    }

    /**
     *
     * - 광원 설정
     *
     * @return { void }
     * @private
     */
    _setupLight(){

        /** 광원 색 */
        const color = 0xffffff;

        /** 광원의 세기 값 */
        const intensity = 1;

        const light = new THREE.DirectionalLight( color , intensity );

        light.position.set( -1 , 2 ,4 );

        this._scene.add( light );

    }

    /**
     *
     * - 해당 객체 모델( 파란 정육면체 설정 ) 설정
     *
     * @return { void }
     * @private
     */
    _setupModel(){

        /** 해당 모델의 형태 설정 */
        const geometry = new THREE.BoxGeometry( 1 , 1 , 1 );

        /** 해당 모델의 질감 설정 */
        const material = new THREE.MeshPhongMaterial( { color : 0x44a88 } );

        /** 실제 모델 생성 */
        this._cube = new THREE.Mesh( geometry , material );

        this._scene.add( this._cube );

    }

}

window.onload = function(){
    new App();
}