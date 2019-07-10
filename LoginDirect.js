import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl('https://www.sehatq.com/')

WebUI.click(findTestObject('Object Repository/SehatQ/Login Direct/Page_SehatQ  Tanya dokter dan tips keluarga sehat/button_Login  Daftar Baru'))

WebUI.delay(20, FailureHandling.STOP_ON_FAILURE)

WebUI.setText(findTestObject('Object Repository/SehatQ/Login Direct/Page_SehatQ  Tanya dokter dan tips keluarga sehat/input_Alamat E-Mail_email'), 
    'ffadilla.90@hotmail.com')

WebUI.setEncryptedText(findTestObject('Object Repository/SehatQ/Login Direct/Page_SehatQ  Tanya dokter dan tips keluarga sehat/input_Kata Sandi_password'), 
    '5N7hhBwerqY1X/rpp9tfWQ==')

WebUI.click(findTestObject('Object Repository/SehatQ/Login Direct/Page_SehatQ  Tanya dokter dan tips keluarga sehat/button_Masuk'))

WebUI.waitForElementVisible(findTestObject('Object Repository/SehatQ/Login Direct/Page_SehatQ  Tanya dokter dan tips keluarga sehat/input_SehatQ  Asisten Kesehatan Anda_query'), 
    10)

WebUI.waitForPageLoad(150000)

