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
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('www.sehatq.com')

WebUI.waitForPageLoad(5000)

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/btn_Login'))

WebUI.waitForPageLoad(150000000)

WebUI.scrollToElement(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/button_DaftarBaru'), 
    50)

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/button_DaftarBaru'))

WebUI.waitForPageLoad(200000)

WebUI.setText(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/in_Nama'), 'Fadil')

WebUI.setText(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/in_email'), 'fadilla.90@hotmail.com')

WebUI.setEncryptedText(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/in_password'), 
    '5N7hhBwerqY1X/rpp9tfWQ==')

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/img'))

WebUI.selectOptionByValue(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/select_Tanggal'), 
    '9', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/select_Bulan'), 
    '8', true)

WebUI.setText(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/input_Tahun Lahir_bod-tahun'), 
    '1990')

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/i_Prev_fas fa-chevron-circle-right'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_Perlu Refreshing'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_Jaga Makan'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_Perokok'))

WebUI.scrollToElement(findTestObject('SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_Other'), 100)

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_Other'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/i_Prev_fas fa-chevron-circle-right'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_InfoPenyakit'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_KulitBersih'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/label_BPJS'))

WebUI.click(findTestObject('Object Repository/SehatQ/Page_SehatQ  Tanya dokter dan tips keluarga sehat/button_Register'))

WebUI.delay(100, FailureHandling.STOP_ON_FAILURE)

WebUI.closeBrowser()
