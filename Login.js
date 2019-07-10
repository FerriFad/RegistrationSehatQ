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

WebUI.click(findTestObject('Object Repository/SehatQ/Login/Page_SehatQ  Tanya dokter dan tips keluarga sehat/btn_LoginDaftarBaru'))

WebUI.click(findTestObject('SehatQ/Login/Page_SehatQ  Tanya dokter dan tips keluarga sehat/Page_SehatQ  Tanya dokter dan tips keluarga sehat/a_Sign in with Google'))

WebUI.waitForElementPresent(findTestObject('Object Repository/SehatQ/Login/Page_Masuk - Akun Google/input_sehatqcom_identifier'), 
    100)

WebUI.setText(findTestObject('Object Repository/SehatQ/Login/Page_Masuk - Akun Google/input_sehatqcom_identifier'), 'ffadilla.90@gmail.com')

WebUI.click(findTestObject('Object Repository/SehatQ/Login/Page_Masuk - Akun Google/span_Berikutnya'))

WebUI.waitForElementPresent(findTestObject('SehatQ/Login/Page_Masuk - Akun Google/input_Terlalu sering gagal_password'), 
    100)

WebUI.setEncryptedText(findTestObject('SehatQ/Login/Page_Masuk - Akun Google/input_Terlalu sering gagal_password'), '4q2dMIDOsmwjMJ5CGAoUSg==')

WebUI.waitForElementPresent(findTestObject('SehatQ/Login/Page_Masuk - Akun Google/Page_Masuk - Akun Google/span_Berikutnya'), 
    50)

WebUI.click(findTestObject('SehatQ/Login/Page_Masuk - Akun Google/Page_Masuk - Akun Google/span_Berikutnya'))

WebUI.closeBrowser()

