### Three.js

---

#### 기본 구성 요소

- Three.js 는 Scene 이라는 장면에 해당 하는 객체가 있고,
  - 해당 장면을 출력장치에 출력하는 Renderer 객체가 존재한다


- Scene 을 Rendering 시 어떤 시점에서 보느냐에 따라, 다양한 모습으로 렌더링 될 수 있다


- 그 시점을 **Camera** 로 정의한다!



> **Renderer**
> 
> - 화면에 렌더링하기 위해서는 Scene 객체와 Camera 객체 필요
> 
>> **Scene** ( 장면 )
>>
>> ---
>>
>> - 3차원 객체로 구성
>>
>>> **Light**
>>>
>>> - 3차원 형상이 화면에 표시되기 위한 광원
>>
>>> **Mesh( Object3D )**
>>>
>>> - Object3D 의 파생 클래스
>>> - Mesh 를 생성하기 위해서는 Geometry 객체와 Material 객체 필요
>>>
>>>> **Geometry**
>>>> 
>>>> - 3차원 Object 의 형태를 정의
>>> 
>>>> **Material**
>>>>
>>>> - 색상 및 투명도등 질감 정의
> 
>> **Camera**
>>
>> - Scene 을 보는 시점 정의

- 01Basic 에서는 육면체의 형상을 정의하는 BoxGeometry 사용

---

### BufferGeometry
#### Three.js 에서 제공하는 기본 Geometry

아래의 Geometry 는 BufferGeometry 를 상속받고 있다 

- BoxGeometry


- CircleGeometry


- CylinderGeometry


- TorusKnotGeometry


- SphereGeometry


- RingGeometry


- PlaneGeometry


- TorusGeometry


- ExtrudeGeometry
  - TextGeometry


- LatheGeometry


- TubeGeometry


- ShapeGeometry


- ParametricGeometry
  - 수학적 함수식에 무게의 값을 입력하여 얻을 수 있는 좌표로 구성된 Geometry


- EdgesGeometry
  - Geometry 를 구성하는 인접면의 각도에 따라 Geometry 를 재구성한다


- WireframeGeometry


- PolyhedronGeometry
  - 다면체를 생성하는 Geometry
  - 아래 Geometry 는 PolyhedronGeometry 를 상속받는 Geometry
  - IcosahedronGeometry
    - 20면체 정의
  - OctahedronGeometry
    - 8면체 정의
  - DodecahedronGeometry
    - 12면체 정의
  - TetrahedronGeometry
    - 4면체 정의

---


> BufferGeometry
> 
> - 아래는 3차원 데이터를 정의하기 위한 데이터
> 
>> 정점( Vertex )
>>
>> - x , y , z 축에 대한 좌표
> 
>> 정점 인덱스( Vertex Index )
>>
>> - 3차원 오브젝트에 면을 구성하는 정점( 꼭짓점 ) 인덱스
> 
>> 수직 벡터( Normal Vector )
>>
>> - 정점의 수직 벡터
> 
>> 정점 색상( Vertex Color )
> 
>> 텍스쳐 맵핑을 위한 UV 좌표
> 
>> 사용자 정의 데이터

-->

> **GPU**

이러한 데이터들은 3차원으로 시각화될때, GPU 에 한번에 전달되어 빠르게 처리된다