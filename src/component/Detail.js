import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ itm }) => {
    const { id } = useParams();
    const detailItm = itm.find(it => it.id == id);

    //자료를 가겨와서 자료에 매칭되는 거를 여기에 뿌리고 싶어...
    // javascript 에서 브라우즈 주소창 paramater 값과 일치하는 배열에 있는 값을 구하는 방법...
    return (
        <>
            {
                detailItm &&
                <div>
                    <img src={detailItm?.image_link} alt="" />
                </div>
            }

        </>
    )
}

export default Detail;