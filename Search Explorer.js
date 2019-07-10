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

WebUI.click(findTestObject('Object Repository/SehatQ/Search Obat/Page_SehatQ  Tanya dokter dan tips keluarga sehat/a_Obat'))

WebUI.setText(findTestObject('Object Repository/SehatQ/Search Obat/Page_SehatQ - Informasi Obat/input_Asisten Kesehatan Keluarga Anda_query'), 
    'Amoxilin')

WebUI.click(findTestObject('Object Repository/SehatQ/Search Obat/Page_SehatQ - Informasi Obat/button_Asisten Kesehatan Keluarga Anda_button-search'))

WebUI.setText(findTestObject('Object Repository/SehatQ/Search Obat/Page_SehatQ - Pencarian/input_Asisten Kesehatan Keluarga Anda_query'), 
    'Metyl')

WebUI.click(findTestObject('Object Repository/SehatQ/Search Obat/Page_SehatQ - Pencarian/button_Asisten Kesehatan Keluarga Anda_button-search'))

WebUI.delay(10)

WebUI.click(findTestObject('Object Repository/SehatQ/Search Obat/Page_SehatQ - Pencarian/h5_Inilah Perbedaan BPJS Kesehatan dengan Asuransi Swasta'))

WebUI.delay(10)

WebUI.click(findTestObject('Object Repository/SehatQ/Search Obat/Page_Apa Saja Perbedaan BPJS Kesehatan dan Asuransi Swasta/a_Kehamilan'))

WebUI.waitForPageLoad(25000)

