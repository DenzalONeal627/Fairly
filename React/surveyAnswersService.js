import axios from "axios";
import * as helper from "./serviceHelpers";

const endpoint = `${helper.API_HOST_PREFIX}/api/surveys/answers`;

function getSurveyAnswers (pageIndex, pageSize) {
    const config = {
        method:"GET",
        url:`${endpoint}${"/paginate/answered?pageIndex="}${pageIndex}${"&pageSize="}${pageSize}`, 
        crossdomain:true,
        headers:{"Content-Type":"application/json"}
       };
       return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const surveyAnswerService = { getSurveyAnswers };

export default surveyAnswerService;
