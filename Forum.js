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

WebUI.delay(10)

WebUI.click(findTestObject('Object Repository/SehatQ/Forum/Page_SehatQ  Tanya dokter dan tips keluarga sehat/a_Forum Tanya Jawab                                Forum tanya jawab dengan tim dokter seputar kesehatan'))

WebUI.click(findTestObject('Object Repository/SehatQ/Forum/Page_SehatQ  Forum Tanya Jawab/h2_Apakah penyebab pusing yang disertai penglihatan buram'))

WebUI.delay(10)

WebUI.scrollToElement(findTestObject('SehatQ/Forum/Page_Apakah penyebab pusing yang disertai penglihatan buram/textarea_Diskusi Pengalaman Anda_txtComment'), 
    50)

WebUI.setText(findTestObject('Object Repository/SehatQ/Forum/Page_Apakah penyebab pusing yang disertai penglihatan buram/textarea_Diskusi Pengalaman Anda_txtComment'), 
    'jika pusing disertai mual ?')

WebUI.click(findTestObject('Object Repository/SehatQ/Forum/Page_Apakah penyebab pusing yang disertai penglihatan buram/a_Kirim'))

WebUI.waitForPageLoad(10000)
