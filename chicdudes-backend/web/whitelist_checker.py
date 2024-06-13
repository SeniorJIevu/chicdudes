import gspread
from oauth2client.service_account import ServiceAccountCredentials
import logging

from fastapi import APIRouter, Request, Body

from common.const import PROJECT_DIR





check_router = APIRouter()

logger = logging.getLogger(__name__)



@check_router.post("/check_whitelist")
def check_whitelist(
    _: Request,
    wallet: str = Body(..., embed=True)):
    
    scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
    credentials = ServiceAccountCredentials.from_json_keyfile_name(rf'{PROJECT_DIR}/web/chicexcel.json', scope)
    
    client = gspread.authorize(credentials)
    
    sheet = client.open_by_url('https://docs.google.com/spreadsheets/d/11oypowIMvnMtXcrBq3AwHGWSs_IroWXb_BErqTqzbbE/edit#gid=0')
    worksheet =  sheet.get_worksheet(0)

    column_data = worksheet.col_values(1)
    
    if wallet in column_data:
        return {"status": 'True'} 
    
    
    logger.info("Get info account about WL")
    
    return {"status": 'False'} 